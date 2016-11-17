import {DataModel} from "./database";
import {ObjectSchema} from "./base";
import {FileProperties, MyDocument, IHolder} from "../public-define";
import {driver} from "../library/driver";
import {createDebug} from "../debug";
import {SchemaTypes, Document, DocumentQuery} from "mongoose";
import {DiedFileError} from "../library/base.driver";

export const UploadItemsSchema: ObjectSchema = {
	url: {
		type: String,
		required: true,
	},
	urlInternal: {
		type: String,
		required: true,
	},
	mime: {
		type: String,
	},
	attachedData: {
		type: Object,
		required: true,
	},
	fileHash: {
		type: String,
		required: true,
		unique: true,
	},
	hasUploaded: {
		type: Boolean,
		default: false,
	},
	error: {
		type: SchemaTypes.Mixed,
		required: false,
	},
	holders: {
		type: [{
			holder: String,
			relatedId: String,
		}],
		default: [],
	},
};

const debugUpload = createDebug('db:upload');

export type UploadItemsObj = FileProperties & MyDocument & Document;

interface KeyValuePair {
	[id: string]: string;
}

export class UploadItems extends DataModel<FileProperties> {
	protected getTableName() {
		return JsonEnv.upload.table;
	}
	
	protected getSchema() {
		return UploadItemsSchema;
	}
	
	checkHash(hash: string, upsert?: KeyValuePair, meta?: KeyValuePair) {
		debugUpload('fetch file with hash: %s', hash);
		
		let hasMeta = meta && Object.keys(meta).length > 0;
		
		let p: DocumentQuery<UploadItemsObj,UploadItemsObj>;
		
		if (upsert) {
			p = this.model.findOneAndUpdate({fileHash: hash}, {
				$setOnInsert: upsert,
				$set: hasMeta? wrapMeta(meta) : {attachedData: {}},
			}, {
				upsert: true,
				'new': true,
				setDefaultsOnInsert: true,
			});
		} else {
			p = this.model.findOne({fileHash: hash});
		}
		
		return p.then((object) => {
			if (!object) {
				throw new Error('Database Error: upload-items ::upsert() failed. without error.');
			}
			return this.checkUploadedFile(object);
		});
	}
	
	checkUploadedFile(object: UploadItemsObj, cache: boolean = true): Promise<UploadItemsObj> {
		if (!object) {
			return Promise.reject(new Error('object not found'));
		}
		if (cache && object.hasUploaded) {
			debugUpload('file exists and upload completed.');
			return Promise.resolve(object);
		}
		debugUpload('got file object, but not know is uploaded or not.');
		return driver.isFileReady(object).then((ready) => {
			if (ready) { // 文件已经准备好
				debugUpload('mark file is uploaded');
				
				object.set('hasUploaded', true);
				object.set('error', null);
				
				return object.save();
			} else { // 没有在希望的位置找到这个文件
				debugUpload('file can\'t fetch, wait for next time.');
				return object;
			}
		}, (err) => { // 各种“不该出现”的错误
			debugUpload('failed. hash not equal, or mime not allow:');
			debugUpload('    %s', err? err.stack || err : err);
			
			object.set('error', err);
			
			if (err instanceof DiedFileError) {
				object.set('hasUploaded', true); // disable retry
			}
			
			return object.save();
		});
	}
	
	getItemById(itemId: string): Promise<UploadItemsObj> {
		return this.model.findById(itemId).then<UploadItemsObj>((d) => {
			if (!d) {
				return Promise.reject(d);
			}
			return d;
		});
	}
	
	hold(isHold: boolean, id: string, who: IHolder) {
		const update: any = {};
		if (isHold) {
			update.$addToSet = {
				holders: who,
			};
		} else {
			update.$pullAll = {
				holders: who,
			};
		}
		return this.model.findByIdAndUpdate(id, update);
	}
}

export const instance = new UploadItems();

function wrapMeta(meta: KeyValuePair) {
	const wrappedMeta = {};
	Object.keys(meta).forEach((name) => {
		wrappedMeta[`attachedData.${name}`] = meta[name];
	});
	return wrappedMeta;
}

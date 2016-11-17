import {SignResult, FileProperties} from "../public-define";
import {createFileName, getFileRelatedToRootPath} from "../database/generate-key";
import {createDebug} from "../debug";
import {downloadFile} from "./helper/request";
import {hashBuffer, compareHash} from "./helper/hash";
import {detectMime} from "./helper/mime";
import request = require("request");

const debugCheck = createDebug('hash-check');

export class DiedFileError extends Error {
}

export abstract class DriverBase {
	abstract signKey(fileType: string, key: string): Promise<SignResult>;
	
	protected signExpire = 60;
	
	constructor() {
	}
	
	sign(object: FileProperties): Promise<SignResult> {
		const key = createFileName(object.createdAt, object.fileHash, object.mime);
		const filePath = getFileRelatedToRootPath(object.createdAt, key);
		return this.signKey(object.mime, filePath);
	}
	
	isFileReady(object: FileProperties): Promise<boolean> {
		if (!object.urlInternal) {
			// file object not even created
			return Promise.resolve(false);
		}
		
		return downloadFile(object).then((gotBody) => {
			if (!gotBody) {
				return <any>false;
			}
			
			if (!compareHash(object, hashBuffer(<Buffer>gotBody))) {
				throw new DiedFileError('uploaded file hash failed.');
			}
			
			return detectMime(<Buffer>gotBody);
		}).then((mime) => {
			if (!mime) {
				return mime;
			}
			// image/png == image/jpg  - not care
			if (mime.split('/').shift() === object.mime.split('/').shift()) {
				return true;
			} else {
				throw new DiedFileError('file mime type not equal');
			}
		});
	}
}

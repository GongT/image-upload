import {sha256_file} from "./sha256_extra";
import {SignApiResult, FileProperties} from "./public-define";

declare const require: any;
try {
	require("source-map-support/register");
} catch (e) {
}

export interface KeyValuePair {
	[id: string]: string;
}

import Qs = require('qs');

declare var window, global;
const g = typeof window === 'object'? window : global;
const requestUrl = g.hasOwnProperty('IMAGE_UPLOAD_REQUEST_URL')
	? slashEnd(g.IMAGE_UPLOAD_REQUEST_URL)
	: slashEnd('{REQUEST_URL_AUTO_PLACE_HERE}');

const CONFIG_SERVER_HASH = (() => {
	if (typeof window === 'object' || !global.hasOwnProperty('JsonEnv')) {
		return undefined;
	}
	return global.JsonEnv.upload.hashKey;
})();

declare const fetch: (...args: any[]) => Promise<any>;

function slashEnd(str) {
	return str.replace(/([^\/])$/, '$1/');
}
function noSlashStart(str) {
	return str.replace(/^\//g, '$1/');
}

export interface ServiceOptions {
	serverHash?: string;
	holder?: string;
	projectName?: string;
}

export class ImageUploadService {
	private CONFIG_SERVER_HASH = CONFIG_SERVER_HASH;
	private CONFIG_HOLDER = null;
	
	constructor(opt: ServiceOptions = {}) {
		if (opt.serverHash) {
			this.CONFIG_SERVER_HASH = opt.serverHash;
		}
		if (opt.holder || opt.projectName) {
			this.CONFIG_HOLDER = opt.holder || opt.projectName;
		}
	}
	
	requestSignUrl(fileObject: File, metaData: KeyValuePair = {}): Promise<SignApiResult> {
		if (!fileObject) {
			return Promise.reject(new Error('please select file'));
		}
		if (fileObject.size > 1000 * 1000 * 500) {
			return Promise.reject(new Error('file too large, must < 500kb'));
		}
		return sha256_file(fileObject).then((hash) => {
			return this.api('post', 'sign-upload-url', {
				mime: fileObject.type,
				meta: metaData,
				hash: hash,
			});
		});
	}
	
	doUploadFile(sign: SignApiResult, fileObject: File): Promise<FileProperties> {
		if (sign.complete) {
			return Promise.resolve(sign.file);
		}
		return this.api('put', sign.signedUrl, fileObject, {
			headers: {
				'Content-Type': fileObject.type,
			},
		}).then(() => {
			this.completeUploadFile(sign);
			return sign.file;
		});
	}
	
	completeUploadFile(sign: SignApiResult) {
		return this.api('get', 'complete-upload', {id: sign.file._id});
	}
	
	simpleUploadFile(fileObject: File, metaData: KeyValuePair = {}): Promise<FileProperties> {
		return this.requestSignUrl(fileObject, metaData).then((sign: SignApiResult) => {
			if (sign.complete) {
				console.info('this file already uploaded.');
				return sign.file;
			} else {
				return this.doUploadFile(sign, fileObject);
			}
		});
	}
	
	holdFile(fileId: string, relatedId: string, holder: string = this.CONFIG_HOLDER, serverHash: string = this.CONFIG_SERVER_HASH) {
		if (!holder) {
			throw new Error('holdFile: `holder` param is required.');
		}
		return this.api('post', 'hold-file', {
			id: fileId,
			holder,
			relatedId,
			serverHash,
		});
	}
	
	releaseFile(fileId: string, relatedId: string, holder: string = this.CONFIG_HOLDER, serverHash: string = this.CONFIG_SERVER_HASH) {
		if (!holder) {
			throw new Error('releaseFile: `holder` param is required.');
		}
		return this.api('post', 'release-file', {
			id: fileId,
			holder,
			relatedId,
			serverHash,
		});
	}
	
	api(method: string, uri: string, params?: any, _options: any = {}) {
		let req;
		if (!/^https?:\/\//.test(uri)) {
			uri = requestUrl + noSlashStart(uri);
		}
		method = method.toLowerCase();
		if (params) {
			if (method === 'post') {
				req = {
					method: method,
					body: JSON.stringify(params),
				};
			} else if (method === 'put') {
				req = {
					method: method,
					body: params,
				};
			} else {
				uri = uri + '?' + Qs.stringify(params);
				req = {
					method: method,
				};
			}
		}
		
		req.headers = Object.assign({
			'Accept': 'application/json, application/xml',
			'Content-Type': 'application/json'
		}, _options.headers);
		if (!req.credentials) {
			req.credentials = 'same-origin';
		}
		
		return fetch(uri, req).then((response) => {
			if (response.status === 200) {
				if (/\/json/.test(response.headers.get('content-type'))) {
					return response.json();
				} else {
					return response.text();
				}
			}
			throw {
				status: response.status,
				message: `http error: ${response.statusText}`
			};
		}).then((data) => {
			if (typeof data === 'string') {
				if (data) {
					throw new Error(data);
				}
			} else if (data.status === 0) {
				return data;
			} else {
				throw data;
			}
		});
	}
}

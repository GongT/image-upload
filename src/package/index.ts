import {IS_CLIENT, IS_SERVER, isomorphicGlobal} from "@gongt/ts-stl-library/check-environment";
import {GlobalVariable} from "@gongt/ts-stl-library/pattern/global-page-data";
import {fetch} from "./fetch";
import {FileProperties, SignApiResult} from "./public-define";
import {sha256_file} from "./sha256_extra";
import Qs = require('qs');

declare const require: any;
try {
	global['require']("source-map-support/register");
} catch (e) {
}

export interface KeyValuePair {
	[id: string]: string;
}

declare const JsonEnv: any;

function slashEnd(str) {
	return str.replace(/([^\/])$/, '$1/');
}
function noSlashStart(str) {
	return str.replace(/^\//g, '$1/');
}

export interface ServiceOptions {
	serverHash?: string;
	holder?: string;
	projectName: string;
	debug?: boolean;
	serverUrl?: string;
}

let fileObject;

function getServerToken() {
	try {
		const {JsonEnv} = require('@gongt/jenv-data');
		return JsonEnv.serverRequestKey;
	} catch (e) {
	}
}
export const ImageUploadPassingVar = 'ImageUploadRemoteUrl';
function getRequestUrl() {
	let url = GlobalVariable.get(isomorphicGlobal, ImageUploadPassingVar);
	if (url) {
		if (!/https?:/.test(url)) {
			url = location.protocol + url;
		}
	} else if (IS_SERVER) {
		try {
			const {JsonEnv} = require('@gongt/jenv-data');
			url = JsonEnv.upload['apiEndPoint'] || 'http://image-upload.' + JsonEnv.baseDomainName;
		} catch (e) {
		}
	}
	return url;
}

function guessOptions(opt: ServiceOptions) {
	if (!opt.serverUrl) {
		opt.serverUrl = getRequestUrl();
	}
	if (!opt.serverHash && IS_SERVER) {
		opt.serverHash = getServerToken();
	}
	if (!opt.holder && !opt.projectName && IS_SERVER) {
		opt.projectName = process.env.PROJECT_NAME;
	}
}

function safeUrl(str: string) {
	if (!str) {
		return str;
	}
	if (!/^https?:/.test(str)) {
		str = location.protocol + str;
	}
	if (!/\/$/.test(str)) {
		str += '/';
	}
	return str;
}

export class UploadService {
	private serverHash;
	private CONFIG_HOLDER = null;
	private userToken: string;
	private requestUrl: string;
	
	constructor(opt: ServiceOptions) {
		if (!opt) {
			throw new Error('image-upload: no options.')
		}
		guessOptions(opt);
		
		this.requestUrl = safeUrl(opt.serverUrl);
		if (!this.requestUrl) {
			throw new Error('image-upload: require option: requestUrl');
		}
		if (opt.serverHash) {
			if (IS_CLIENT) {
				throw new Error('image-upload: do not use option on client: serverHash')
			}
			this.serverHash = opt.serverHash;
		} else if (IS_SERVER) {
			throw new Error('image-upload: require option on server: serverHash')
		}
		if (opt.holder || opt.projectName) {
			this.CONFIG_HOLDER = opt.holder || opt.projectName;
		} else {
			throw new Error('image-upload: require option: projectName.')
		}
	}
	
	attachUserToken(newToken: string) {
		this.userToken = newToken;
	}
	
	requestSignUrl(fileObject: File, metaData: KeyValuePair = {}): Promise<SignApiResult> {
		if (!fileObject) {
			return Promise.reject(new Error('please select file'));
		}
		if (fileObject.size > 1000 * 1000 * 500) {
			return Promise.reject(new Error('file too large, must < 500kb'));
		}
		return <any> sha256_file(fileObject).then((hash) => {
			console.log('hash file: %s', hash);
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
			return this.completeUploadFile(sign);
		}).then(() => {
			return sign.file;
		});
	}
	
	completeUploadFile(sign: SignApiResult) {
		return this.api('get', 'complete-upload', {id: sign.file._id});
	}
	
	simpleUploadFile(fileObject: File, metaData: KeyValuePair = {}): Promise<FileProperties> {
		return this.requestSignUrl(fileObject, metaData).then((sign: SignApiResult) => {
			console.log('server sign file: %O', sign);
			if (sign.complete) {
				console.info('this file already uploaded.');
				return sign.file;
			} else {
				return this.doUploadFile(sign, fileObject);
			}
		});
	}
	
	headlessUploadFile(metaData: KeyValuePair = {}): Promise<FileProperties> {
		if (typeof window !== 'object') {
			throw new TypeError(`Can't use headless upload on server.`);
		}
		if (typeof event !== 'object') {
			throw new TypeError(`headless upload must call during click callback.`);
		}
		
		const file: HTMLInputElement = <any> document.createElement('INPUT');
		file.setAttribute('type', 'file');
		file.style.display = 'none';
		
		document.body.appendChild(file);
		const p = new Promise<FileProperties>((resolve, reject) => {
			file.addEventListener('change', () => {
				if (file.files && file.files[0]) {
					const p1 = this.simpleUploadFile(file.files[0], metaData);
					p1.then(resolve, reject);
					const cb = destroy.bind(undefined, file);
					p1.then(cb, cb)
				} else {
					reject();
				}
			});
		});
		file.click();
		if (fileObject) {
			destroy(fileObject);
		}
		fileObject = file;
		
		return <Promise<FileProperties>>p;
	}
	
	holdFile(fileId: string, relatedId: string, holder: string = this.CONFIG_HOLDER): Promise<FileProperties> {
		if (!holder) {
			throw new Error('holdFile: `holder` param is required.');
		}
		return this.api('post', 'hold-file', {
			id: fileId,
			holder,
			relatedId,
			serverHash: this.serverHash,
		}).then((ret) => {
			return ret.file;
		});
	}
	
	releaseFile(fileId: string, relatedId: string, holder: string = this.CONFIG_HOLDER): Promise<FileProperties> {
		if (!holder) {
			throw new Error('releaseFile: `holder` param is required.');
		}
		return this.api('post', 'release-file', {
			id: fileId,
			holder,
			relatedId,
			serverHash: this.serverHash,
		}).then((ret) => {
			return ret.file;
		});
	}
	
	api(method: string, uri: string, params?: any, _options: any = {}) {
		let req;
		if (!/^https?:\/\//.test(uri)) {
			uri = this.requestUrl + 'api/' + noSlashStart(uri);
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
			'X-Image-Login-Token': this.userToken,
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		}, _options.headers);
		if (!req.credentials) {
			req.credentials = 'same-origin';
		}
		req.mode = 'cors';
		req.redirect = 'follow';
		req.cache = 'no-cache';
		
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
				message: `http error: ${response.statusText}`,
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

function destroy(file: HTMLInputElement) {
	document.body.removeChild(file);
	if (fileObject === file) {
		fileObject = null;
	}
}

/** @deprecated */
export const ImageUploadService = UploadService;

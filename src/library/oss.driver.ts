import {DriverBase} from "./base.driver";
import {SignResult} from "../public-define";
import {resolve} from "url";

let OSS;
let bucket: ali_oss;
const endpointUrl = JsonEnv.upload.cdn.url;
const endpointUrlInternal = endpointUrl.replace('.aliyuncs.com', '-internal.aliyuncs.com');

export class OSSDriver extends DriverBase {
	constructor() {
		super();
		
		OSS = require('ali-oss');
		bucket = OSS(Object.assign({}, JsonEnv.upload.cdn, {
			internal: false,
			secure: false,
		}));
		
		console.log('created aliyun cdn (oss) driver');
	}
	
	signKey(fileType: string, key: string): Promise<any> {
		const url = bucket.signatureUrl(key, {
			expires: this.signExpire,
			'content-type': fileType,
			method: 'PUT',
		});
		return Promise.resolve(<SignResult>{
			uploadUrl: url,
			fetchUrl: resolve(endpointUrl, key),
			fetchUrlInternal: resolve(endpointUrlInternal, key),
		});
	}
}

import {FileProperties} from "../../public-define";
import {createDebug} from "../../debug";
import request = require("request");

const debugCheck = createDebug('hash-check');

export function downloadFile({url, urlInternal}: FileProperties): Promise<void|Buffer> {
	const fileUrl = JsonEnv.isDebug? url : urlInternal;
	debugCheck('check file: %s', fileUrl);
	
	return new Promise((resolve) => {
		request(fileUrl, {encoding: null}, (err, resp, body) => {
			if (err) {
				console.error('base.driver: http error: ', err);
				debugCheck('request failed: %s', err);
				return resolve(); // 未知错误，保持状态不变，等下次再试}
			}
			debugCheck('server response: %s', resp.statusCode);
			if (resp.statusCode < 200 || resp.statusCode > 299) {
				resolve(); // 文件还没上传，或者权限错误（不可能出现），或者一些临时错误，下次请求可能会变正常
			} else {
				resolve(body);
			}
		});
	});
}

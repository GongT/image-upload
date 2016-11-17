import {createDebug} from "../../debug";
const mmm = require('mmmagic');

const debugCheck = createDebug('hash-check');

export function detectMime(buffer: Buffer) {
	var magic = new mmm.Magic(mmm.MAGIC_MIME_TYPE);
	
	return new Promise((resolve, reject) => {
		magic.detect(buffer, function (err, data) {
			if (err) {
				return reject(err);
			} else {
				debugCheck('detected mime type is: %s', data);
				return resolve(data);
			}
		});
	});
}

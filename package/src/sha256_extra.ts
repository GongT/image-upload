/// <reference path="./test.d.ts"/>

import {sha256} from "sha.js";

export function sha256_file(f: File): Promise<string> {
	const reader = new FileReader();
	const p = new Promise((resolve, reject) => {
		reader.addEventListener('error', (evt) => {
			reject(evt.target['error']);
		});
		reader.addEventListener('load', () => {
			const sha = (new sha256())
				.update(reader.result)
				.digest('hex');
			
			resolve(sha);
		});
	});
	
	reader.readAsArrayBuffer(f);
	
	return p
}

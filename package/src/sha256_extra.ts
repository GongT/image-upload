import sha256 from "./sha256";

export function sha256_file(f: File): Promise<string> {
	const reader = new FileReader();
	const p = new Promise((resolve, reject) => {
		reader.addEventListener('error', (evt) => {
			reject(evt.target['error']);
		});
		reader.addEventListener('load', () => {
			const shaBuffer = sha256(new Uint8Array(reader.result));
			resolve(bufferToString(shaBuffer));
		});
	});
	
	reader.readAsArrayBuffer(f);
	
	return p
}

function pad(s) {
	if (s.length === 1) {
		return `0${s}`;
	} else {
		return s;
	}
}

function bufferToString(buffer) {
	let string = '';
	buffer.forEach((byte) => {
		string += pad(byte.toString(16));
	});
	return string.toLowerCase();
}

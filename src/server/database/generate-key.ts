import {resolve} from "path";
import {createHash} from "crypto";

const ROOT_FOLDER = JsonEnv.upload.image.rootFolder.replace(/^\//g, '');

export function getFileRelatedToRootPath(time: Date, fileKey: string) {
	return resolve('/', ROOT_FOLDER,
		time.getUTCFullYear().toString(),
		(time.getUTCMonth() + 1).toString(),
		time.getUTCDate().toString(),
		fileKey).replace(/^\//g, '');
}

export function createFileName(time: Date, fileHash: string, mime: string) {
	const extStr = fileExtension(mime);
	if (!extStr) {
		return null;
	}
	
	return `${time.getUTCHours()}${time.getUTCMinutes()}${time.getUTCSeconds()}_${time.getUTCMilliseconds()}_${md5(fileHash)}.${extStr}`
}

export function fileExtension(fileType: string): string {
	fileType = fileType.replace(/^image\//i, '').toLowerCase();
	switch (fileType) {
	case 'png':
	case 'bmp':
	case 'gif':
	case 'x-icon':
	case 'jpeg':
	case 'jpg':
		return fileType;
	case 'x-windows-bmp':
		return 'bmp';
	default:
		return null;
	}
}

function md5(data) {
	return createHash('md5').update(data).digest("hex");
}

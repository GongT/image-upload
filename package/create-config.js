const fs = require('fs');
const path = require('path');
const FILE = path.resolve(__dirname, './request-url.txt');
let url;

if (process.env.CONFIG_FILE || process.env.JENV_FILE_NAME) {
	const JsonEnv = require("@gongt/jenv-data")();
	url = JsonEnv.upload.requestUrl;
	if (process.env.BUILDING === 'yes') {
		fs.writeFileSync(FILE, url, 'utf-8');
	}
} else if (fs.existsSync(FILE)) {
	url = fs.readFileSync(FILE, 'utf-8');
} else {
	throw new Error('[@microduino-private/image-upload-client] NO CONFIG');
}

url = fs.readFileSync(FILE, 'utf-8');

fs.writeFileSync(path.resolve(__dirname, './dist/global.js'), `
window.IMAGE_UPLOAD_REQUEST_URL = ${JSON.stringify(url)};
Object.assign(window, require('./index'));
delete window.IMAGE_UPLOAD_REQUEST_URL;
`, 'utf-8');
fs.writeFileSync(path.resolve(__dirname, './dist/require.js'), `
global.IMAGE_UPLOAD_REQUEST_URL = ${JSON.stringify(url)};
module.exports = require('./index');
delete global.IMAGE_UPLOAD_REQUEST_URL;
`, 'utf-8');

module.exports = url;

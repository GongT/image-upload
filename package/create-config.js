require("json-env-data/global");
const url = JsonEnv.upload.requestUrl;
const fs = require('fs');
const FILE = './dist/index.js';

const content = fs.readFileSync(FILE, 'utf-8');
let replaced = content.replace(/\{REQUEST_URL_AUTO_PLACE_HERE}/, url.trim());
fs.writeFileSync(FILE, replaced);



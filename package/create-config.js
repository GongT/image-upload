require("@gongt/jenv-data/global");
const url = JsonEnv.upload.requestUrl;
const fs = require('fs');
const path = require('path');
const FILE = path.resolve(__dirname, './dist/index.js');

const content = fs.readFileSync(FILE, 'utf-8');
let replaced = content.replace(/\{REQUEST_URL_AUTO_PLACE_HERE}/, url.trim());
fs.writeFileSync(FILE, replaced);



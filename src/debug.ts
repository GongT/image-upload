import {Application, static as serveStatic} from "express";
import {resolve} from "path";

const debug = require("debug");

export function createDebug(title) {
	return debug(`image-upload:${title}`);
}

export function createDebugPages(app: Application) {
	app.engine('ejs', require('ejs').renderFile);
	app.get('/', (req, res, next) => {
		res.render(resolve(__dirname, '../simple-test-pages/src/index.ejs'), {
			requestUrl: JsonEnv.upload.requestUrl.replace(/\/$/, ''),
		});
	});
	app.use('/tester', serveStatic(resolve(__dirname, '../simple-test-pages/src')));
	app.use('/', serveStatic(resolve(__dirname, '../simple-test-pages'), {fallthrough: true}));
	app.use('/node_modules', serveStatic(resolve(__dirname, '../node_modules')));
	app.use('/jspm_packages', serveStatic(resolve(__dirname, '../simple-test-pages/jspm_packages')));
	
	app.use('/package', serveStatic(resolve(__dirname, '../package')));
}

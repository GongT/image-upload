import * as express from "express";
import {static as serveStatic} from "express";
import {createDebugPages} from "./debug";
import {resolve} from "path";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import {router as ApiRouter} from "./api";
import {createDebug, LEVEL} from "typescript-common-library/server/debug";
import {initServiceWait} from "typescript-common-library/server/boot/init-systemd-service";
import {waitDatabaseToConnect} from "typescript-common-library/server/database/mongodb";
import {bootExpressApp} from "typescript-common-library/server/boot/express-init";

const debug = createDebug('core');

export const app: express.Application & any = express();

// logging request
//noinspection TypeScriptValidateTypes
app.use(logger(':method :url :status - :response-time ms'));

// enable cookies for pages, need to use before use router
app.use(cookieParser(JsonEnv.cookieKey));
// http method calls
app.use(bodyParser.json()); // TODO
app.use('/api', ApiRouter);

app.use(serveStatic(resolve(__dirname, '../package/'), {
	etag: true,
	fallthrough: true
}));
app.use('/jspm_packages', serveStatic(resolve(__dirname, '../simple-test-pages/jspm_packages'), {
	etag: true,
	fallthrough: true
}));

/*// app init complete */

if (JsonEnv.isDebug) {
	createDebugPages(app);
}

initServiceWait(bootExpressApp(app));

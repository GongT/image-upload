import * as express from "express";
import {static as serveStatic} from "express";
import {createDebug, createDebugPages} from "./debug";
import {resolve} from "path";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import {router} from "./api";
import {createServer} from "http";
import {APP_RUN_PORT} from "./boot";

const debug = createDebug('core');

export const app: express.Application & any = express();

// logging request
//noinspection TypeScriptValidateTypes
app.use(logger(':method :url :status - :response-time ms'));

app.use('/server-package/package.tgz', serveStatic(resolve(__dirname, '../server-package/package.tgz')));

// enable cookies for pages, need to use before use router
app.use(cookieParser(JsonEnv.cookieKey));
// http method calls
app.use(bodyParser.json()); // TODO
app.use(router);

app.use(serveStatic(resolve(__dirname, '../package/'), {etag: true}));

/*// app init complete */

if (JsonEnv.isDebug) {
	createDebugPages(app);
}

/**
 * Get port from environment and store in Express.
 */

app.set('port', APP_RUN_PORT);

/**
 * Create HTTP server.
 */

const server = createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(APP_RUN_PORT);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}
	
	const bind = typeof APP_RUN_PORT === 'string'
		? 'Pipe ' + APP_RUN_PORT
		: 'Port ' + APP_RUN_PORT;
	
	// handle specific listen errors with friendly messages
	switch (error.code) {
	case 'EACCES':
		console.error(bind + ' requires elevated privileges');
		process.exit(1);
		break;
	case 'EADDRINUSE':
		console.error(bind + ' is already in use');
		process.exit(1);
		break;
	default:
		throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
	const addr = server.address();
	const bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	debug('Listening on ' + bind);
}

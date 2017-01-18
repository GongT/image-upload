import {Router, Request, Response, NextFunction} from "express";
import {Router as CoreRouter} from "express-serve-static-core";
import {driver} from "./library/driver";
import {instance as uploadItemsModel, UploadItemsObj} from "./database/upload-items";
import {createDebug} from "./debug";
import {SignApiResult} from "./public-define";
import bodyParser = require("body-parser");

export const router: CoreRouter = Router();

function slashEnd(str) {
	return str.replace(/([^\/])$/, '$1/');
}

router.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', req.header('Origin') || '*');
	res.header('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'));
	res.header('Access-Control-Max-Age', '31536000');
	res.header('Access-Control-Allow-Methods', req.header('Access-Control-Request-Methods') || '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
});
router.options(/.*/, (req, res) => {
	res.sendStatus(200);
});

const debugUpload = createDebug('api:upload');
router.post('/sign-upload-url', (req, res, next) => {
	if (!req.body.mime) {
		return next(new Error('require param `mime`'));
	}
	if (!req.body.hash) {
		return next(new Error('require param `hash`'));
	}
	const mime = req.body.mime;
	const hash = req.body.hash;
	const meta = req.body.meta;
	
	debugUpload('request check ok: file type is %s', mime);
	let uploadUrl: string;
	
	uploadItemsModel.checkExistsByHash(hash, {mime: mime}, meta).then((fileObject: UploadItemsObj) => {
		if (fileObject.hasUploaded) {
			uploadUrl = '';
			
			return fileObject;
		} else {
			return driver.sign(fileObject).then((signResult) => {
				uploadUrl = signResult.uploadUrl;
				
				fileObject.set('url', signResult.fetchUrl);
				fileObject.set('urlInternal', signResult.fetchUrlInternal);
				
				debugUpload('create new instance: %s', fileObject._id);
				return fileObject.save();
			});
		}
	}).then((fileObject: UploadItemsObj) => {
		res.send(<SignApiResult>{
			status: 0,
			complete: fileObject.hasUploaded,
			signedUrl: uploadUrl,
			file: fileObject,
		});
	}, next);
});

router.get('/complete-upload', (req, res, next) => {
	if (!req.query.id) {
		return next(new Error('require param `id`'));
	}
	
	uploadItemsModel.getItemById(req.query.id).then((object) => {
		if (!object) {
			throw new Error('no such file record');
		}
		return uploadItemsModel.checkUploadedFile(object);
	}).then((object) => {
		if (object && object.hasUploaded) {
			res.send({
				status: 0,
				message: 'file upload complete.',
			});
		} else {
			res.send({
				status: -1,
				message: 'file not upload complete.',
			});
		}
	}, (e) => {
		next(new Error('invalid request id'));
	});
});

router.post('/hold-file', (req, res, next) => {
	if (hold_release_check(req, next)) {
		return;
	}
	
	const {id, holder, relatedId,} = req.body;
	
	uploadItemsModel.hold(true, id, {holder, relatedId}).then((obj) => {
		res.send({
			status: 0,
			file: obj,
		});
	}, next);
});
router.post('/release-file', (req, res, next) => {
	if (hold_release_check(req, next)) {
		return;
	}
	const {id, holder, relatedId,} = req.body;
	
	uploadItemsModel.hold(false, id, {holder, relatedId}).then((obj) => {
		res.send({
			status: 0,
			file: obj,
		});
	}, next);
});

function hold_release_check(req, next) {
	const {id, holder, relatedId, serverHash} = req.body;
	
	if (!id) {
		next(new Error('require param `id`'));
		return true;
	}
	if (!holder) {
		next(new Error('require param `holder`'));
		return true;
	}
	if (!relatedId) {
		next(new Error('require param `relatedId`'));
		return true;
	}
	if (!serverHash) {
		next(new Error('require param `serverHash`'));
		return true;
	}
	
	if (serverHash !== JsonEnv.upload.hashKey) {
		next(new Error('invalid request, key problem'));
		return true;
	}
	
	return false;
}

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err);
	res.send({
		status: 1,
		message: err.message,
		stack: err.stack,
	});
});

import {ImageUploadService} from "../package/src/index";
import {render} from "react-dom";
import * as React from "react";
import {TestingContext, testContext} from "./share-variables";
import {TestFullUpload} from "./items/full-upload";
import {ResultDisplay} from "./result-display";
import {TestEditFile} from "./items/edit-file";
import {TestUploadOnly} from "./items/upload-only";
import {TestSignOnly} from "./items/sign-only";
import {TestReferFile} from "./items/refer-file";
import {TestGetFile} from "./items/get-file";
import {TestUnreferFile} from "./items/unrefer-file";
import {Row} from "./row";
import {BS3PanelForm} from "./panel";
import {sha256_file} from "../../package/src/sha256_extra";
import {BlockDisplay} from "./block-display";
import {TestCheckFileComplete} from "./items/check-file-complete";

const service = new ImageUploadService();

class RootComponent extends React.Component<> {
	static childContextTypes = testContext;
	private _last_context: TestingContext = {
		api: service,
		last_result: null,
		last_status: 0,
		sign: null,
		upload: null,
		complete: null,
		shareFile: null,
		fileObject: null,
		updateContext: this.updateContext.bind(this),
		handleResult: this.handleResult.bind(this),
		handlePromise: this.handlePromise.bind(this),
		meta: React.PropTypes.any,
	};
	
	updateContext(up) {
		// console.log('context change: %O', up);
		Object.assign(this._last_context, up);
		this.forceUpdate();
	}
	
	handleResult(success: boolean, res: any) {
		this.setState({busy: false});
		this.updateContext({
			last_result: res,
			last_status: success? 0 : 1,
		});
	}
	
	handlePromise(promise: Promise<any>) {
		this.setState({busy: true});
		promise.then(
			this.handleResult.bind(this, true),
			this.handleResult.bind(this, false),
		);
	}
	
	getChildContext(): TestingContext {
		return this._last_context;
	}
	
	fileChange(e) {
		const f = e.target.files[0];
		if (!f) {
			this.updateContext({
				fileObject: f,
				shareFile: null,
			});
			return;
		}
		const shareFile = {
			name: f.name,
			type: f.type,
			size: f.size,
			lastModified: f.lastModified,
			err: null,
			hash: null,
		};
		this.updateContext({
			fileObject: f,
			shareFile: shareFile,
		});
		sha256_file(f).then((hash) => {
			shareFile.hash = hash;
			this.updateContext({
				fileObject: f,
				shareFile: shareFile,
			});
		}, (err) => {
			shareFile.err = err;
			this.updateContext({
				fileObject: f,
				shareFile: shareFile,
			});
		});
	}
	
	render() {
		return <div>
			<div className="container">
				<Row>
					<BS3PanelForm
						title="前置 - 选择文件"
						styleClass={this._last_context.fileObject? 'info':'warning'}
						button={false}
					>
						<input onChange={this.fileChange.bind(this)} type="file" name="file" className="form-control"/>
					</BS3PanelForm>
					<div>
						<pre>{JSON.stringify(this._last_context.shareFile, null, 4)}</pre>
						{this.state && this.state.busy?
							<div className="progress">
								<div className="progress-bar progress-bar-info progress-bar-striped" style={{width: '100%'}}></div>
							</div>
							: null}
					</div>
					<TestFullUpload />
				</Row>
				<Row>
					<BlockDisplay title="1. 签名" content={this._last_context.sign}/>
					<BlockDisplay title="2. 传文件" content={this._last_context.upload}/>
					<BlockDisplay title="3. 检查文件是否成功" content={this._last_context.complete}/>
				</Row>
				<Row>
					<TestSignOnly />
					<TestUploadOnly />
					<TestCheckFileComplete />
				</Row>
				<Row>
					<TestEditFile />
					<TestGetFile />
				</Row>
				<Row>
					<TestReferFile />
					<TestUnreferFile />
				</Row>
			</div>
			
			<ResultDisplay/>
		</div>
	}
}

render<any>(
	<RootComponent />, document.querySelector('#reactRoot')
);

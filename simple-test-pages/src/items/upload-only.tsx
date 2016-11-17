import * as React from "react";
import {BS3PanelForm} from "../panel";
import {testContext} from "../share-variables";

export class TestUploadOnly extends React.Component<{},undefined> {
	static contextTypes = testContext;
	
	onSubmit(e) {
		e.preventDefault();
		if (!this.context.signOk) {
			return alert('not signed.');
		}
		
		this.context.updateContext({
			upload: 'requesting',
			uploadOk: false,
		});
		
		const p = this.context.api.doUploadFile(this.context.sign, this.context.fileObject).then((data) => {
			this.context.updateContext({
				upload: data,
				uploadOk: true,
			});
		}, (e) => {
			this.context.updateContext({
				upload: e,
				uploadOk: false,
			});
		});
		
		this.context.handlePromise(p);
	}
	
	render() {
		return <BS3PanelForm id="formUpload"
			onSubmit={this.onSubmit.bind(this)}
			style="default"
			title="2. 传文件">
			<span style={{wordBreak: 'break-all'}}>{this.context.sign && this.context.sign.signedUrl}</span>
		</BS3PanelForm>
	}
}

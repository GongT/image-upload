import * as React from "react";
import {BS3PanelForm} from "../panel";
import {testContext} from "../share-variables";
import {MetaInput} from "../meta-input";

export class TestSignOnly extends React.Component<{}, any> {
	static contextTypes = testContext;
	
	onSubmit(e) {
		e.preventDefault();
		if (!this.context.meta) {
			return alert('input json data error.');
		}
		if (!this.context.fileObject) {
			return alert('no file selected.');
		}
		
		this.context.updateContext({
			signOk: false,
			sign: 'requesting',
		});
		
		const p = this.context.api.requestSignUrl(this.context.fileObject, this.context.meta).then((data) => {
			this.context.updateContext({
				signOk: true,
				sign: data,
			});
		}, (e) => {
			this.context.updateContext({
				signOk: false,
				sign: e,
			});
		});
		
		this.context.handlePromise(p);
	}
	
	render() {
		return <BS3PanelForm id="formSign"
			title="1. 签名"
			onSubmit={this.onSubmit.bind(this)}
		>
			<MetaInput />
		</BS3PanelForm>
	}
}

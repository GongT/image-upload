import * as React from "react";
import {BS3PanelForm} from "../panel";
import {testContext} from "../share-variables";
import {FileIdDisplay} from "./file-id-display.inc";
import {MetaInput} from "../meta-input";

export class TestEditFile extends React.Component<{},undefined> {
	static contextTypes = testContext;
	
	render() {
		return <BS3PanelForm id="editFile"
			title="修改文件附加信息">
			<FileIdDisplay />
			<MetaInput />
		</BS3PanelForm>
	}
}

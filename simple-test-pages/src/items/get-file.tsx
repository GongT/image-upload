import * as React from "react";
import {BS3PanelForm} from "../panel";
import {FileIdDisplay} from "./file-id-display.inc";

export class TestGetFile extends React.Component<{},undefined> {
	render() {
		return <BS3PanelForm id="getFile"
			style="default"
			title="查询文件">
			<FileIdDisplay />
		</BS3PanelForm>
	}
}

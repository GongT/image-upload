import * as React from "react";
import {testContext} from "../share-variables";

export class FileIdDisplay extends React.Component<{},undefined> {
	static contextTypes = testContext;
	
	render() {
		let id;
		try {
			id = this.context.shareFile._id;
		} catch (e) {
		}
		return <input
			type="text"
			placeholder="文件ID"
			readOnly="readOnly"
			name="id"
			value={id||''}
			className="form-control"
		/>
	}
}

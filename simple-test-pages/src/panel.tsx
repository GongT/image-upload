import * as React from "react";

interface PanelProps {
	id?: string;
	styleClass?: string;
	title: string|React.ReactNode;
	onSubmit?: Function;
	button?: string|boolean;
}

export class BS3PanelForm extends React.Component<PanelProps,undefined> {
	callSubmit(e) {
		if (this.props.onSubmit) {
			this.props.onSubmit(e);
		}
		e.preventDefault();
	}
	
	render() {
		return <form
			onSubmit={this.callSubmit.bind(this)}
			id={this.props.id}
			className={`panel panel-${this.props.styleClass || 'default'}`}
		>
			<div className="panel-heading">{this.props.title}</div>
			<div className="panel-body">
				{this.props.children}
			</div>
			<div className="panel-footer">
				{this.props.button === false
					? ''
					: <input type="submit" value={this.props.button||'OK'} className="btn btn-primary"/>
				}
			</div>
		</form>
	}
}

import * as React from "react";

export class Row extends React.Component<{},undefined> {
	render() {
		const width =parseInt( 12/ React.Children.count(this.props.children) );
		return <div className="row">
			{React.Children.map(this.props.children,(child) => {
			    return <div className={`col-sm-${width}`}>{child}</div>
			})}
		</div>
	}
}

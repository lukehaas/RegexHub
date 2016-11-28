import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Regex extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editableRegex: props.regex.toString(),
			test:"",
			output:[],
			open:false
		};
	}
	handleRegexChange(val) {


		this.setState({
			editableRegex:val
		},this.evaluateOutput);

	}
	handleTestChange(val) {

		this.setState({
			test:val
		},this.evaluateOutput);

	}
	evaluateOutput() {

		if(this.state.test.length>0 && this.state.editableRegex.length>0) {
			var editableRegex = this.state.editableRegex;


			var flags = /[^\/]+$/.exec(editableRegex);
			if(!flags) {
				flags = "";
			}
			editableRegex = editableRegex.replace(/[^\/]+$/, "");

			var reg = new RegExp(eval(editableRegex),flags);

			var out;
			try {
				out = reg.exec(this.state.test);
			} catch(e) {
				out = ["Invalid regex"];
			}

			if(!out) {

				out = ["null"];
			} else if(out[0]==="") {
				out = ["null"];
			} else {				
				var o = [];
				o[0] = out[0];
				for(var k = 1;k < out.length;k++) {

						if(typeof out[k] === "string") {
							o.push(out[k]);
						}
				}
				out = o;
			}

			this.setState({
				output:out
			});
		} else {
			this.setState({
				output:[]
			});
		}


	}
	handleOpen(e) {
		e.preventDefault();

		if(this.state.open) {
			this.setState({
				open:false
			});
		} else {
			this.setState({
				open:true
			});
		}
	}
	render() {
		var output = <div className="output">Output:<ul>{this.state.output.map((data,i) => {return <li key={i}>{data}</li>})}</ul></div>;
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<a href="#" className={this.state.open ? "open" : "closed"} onClick={e => this.handleOpen(e)}>{this.props.name}</a>


					<div className={this.state.open ? "desc" : "desc closed"}><p>{this.props.description}</p></div>

				</div>
				<div className="panel-body">
					<input type="text" value={this.state.editableRegex} onChange={e => this.handleRegexChange(e.target.value)} />
				</div>
				<div className="panel-footer">
					<form>
						<input type="text" placeholder="Test string" value={this.state.test} onChange={e => this.handleTestChange(e.target.value)} />
					</form>
					{this.state.output.length>0 ? output : ""}
				</div>
			</div>
		);
	}
}

export default Regex;

/*

run: webpack -p
to generate bundle.js

Add reset button - once regex is edited the button will restore it?


add search
add details at the bottom for pull requests


*/

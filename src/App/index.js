import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List';

class Index extends Component {
	componentDidMount() {
		alert('this is parent didmount');
	}

	renderList() {
		return <List />;
	}
	render() {
		return <div>
			<div>this is parent</div>;
			{
				this.renderList()
			}
		</div>;
	}
}
ReactDOM.render(<Index />, document.getElementById('app'));

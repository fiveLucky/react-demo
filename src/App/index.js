import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List';

class Index extends Component {
	componentDidMount() {
		console.log('this is parent didmount');
	}

	renderList() {
		return <List />;
	}
	render() {
		return <>
			<List />
		</>;
	}
}
ReactDOM.render(<Index />, document.getElementById('app'));

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Detail from './Detail';

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
			<Detail />
		</>;
	}
}
ReactDOM.render(<Index />, document.getElementById('app'));



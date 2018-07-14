import React, { Component } from 'react';
import List from './List';


export default class Index extends Component {
	componentDidMount() {
		alert('this is parent didmount');
	}

	renderList() {
		return List;
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
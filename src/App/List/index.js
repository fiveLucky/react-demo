import React, { Component } from 'react';

export default class List extends Component {
	componentDidMount() {
		alert('this is list page');
	}
	render() {
		return <div>this is list class</div>;
	}
}
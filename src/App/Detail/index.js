import React, { Component } from 'react';

import './index.less';
export default class List extends Component {
	componentDidMount() {
		alert('this is list page');
	}
	render() {
		return (
			<>
				<div className={'container'}> this is fragment block </div>
				<div> this is fragment block </div>
			</>
		);

	}
}
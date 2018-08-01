import React, { Component } from 'react';

import style from './index.less';
export default class List extends Component {
	componentDidMount() {
		// alert('this is list page');
		new Promise((res) => {
			res();
		}).then(() => {
			console.log('aaa');
			setTimeout(() => {
				console.log('ssssss');
			}, 5000);
		});
	}
	render() {
		return (
			<>
				<div className={style.container}> this is fragment block </div>
				<div> this is fragment block </div>
			</>
		);

	}
}
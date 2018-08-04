import React, { Component } from 'react';

import style from './index.less';
export default class Detail extends Component {
	componentDidMount() {
		this.getTitle().then(() => {
			console.log('then');
		}, (err) => {
			console.log(err);
		}).catch(err => {
			console.log(err);
		});
		const arr = [1, 2, 3];
		if (arr.includes(1)) {
			console.log(1);
		}
	}
	async getTitle() {
		throw new Error('I am a error');
	}
	render() {
		return (
			<>
				<div className={style.container}> this is fragment block </div>
				<div className="container"> this is fragment block </div>
			</>
		);

	}
}
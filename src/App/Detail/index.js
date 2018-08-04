import React, { Component } from 'react';

import style from './index.less';
export default class List extends Component {
	componentDidMount() {
		this.getTitle().catch(err => { console.log(err); });
		const myArr = [1, 3, 4, 5];
		myArr.map(num => console.log(num));
	}
	async getTitle() {
		throw new Error('I am a error');
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
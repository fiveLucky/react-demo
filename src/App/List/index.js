import React, { Component } from 'react';

import style from './index.less';
export default class Detail extends Component {
	componentDidMount() {
		// test async
		this.getTitle().then(str => { console.log('Detail test async', str); });

		// test includes
		const myArr = [1, 3, 4, 5];
		console.log('Detail test includes', myArr.includes(3));

		// test Map
		const testMap = new Map();
		testMap.set('m', 'this is map');
		console.log('Detail test Map', testMap.get('m'));
	}
	async getTitle() {
		return 'this is async function';
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


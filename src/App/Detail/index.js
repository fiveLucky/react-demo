import React, { Component } from 'react';

import style from './index.less';
export default class List extends Component {
	componentDidMount() {
		// test async
		this.getTitle().then(str => { console.log('List test async', str); });

		// test includes
		const myArr = [1, 3, 4, 5];
		console.log('List test includes', myArr.includes(3));
		const str = 'jtzh';
		console.log('List test includes', str.includes('t'));

		// test Map
		const testMap = new Map();
		testMap.set('m', 'this is map');
		console.log('List test Map', testMap.get('m'));
	}
	async getTitle() {
		return 'this is async function';
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



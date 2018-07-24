import React, { Component } from 'react';

import style from './index.less';
export default class Detail extends Component {
	componentDidMount() {
		// alert('this is list page');
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
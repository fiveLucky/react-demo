import React, { Component } from 'react';

import './index.less';
import styles from './index.css';
export default class List extends Component {
	componentDidMount() {
		alert('this is list page');
		console.log('a');
	}
	render() {
		return <div className={`${styles} container`}>this is list class</div>;
	}
}
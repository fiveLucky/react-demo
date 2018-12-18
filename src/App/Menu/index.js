import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from '../index.less';



export default class Detail extends Component {

	render() {
		return (
			<div className={styles.menuContainer}>
				<ul>
					<li><Link to="/Home">首页</Link></li>
					<li><Link to="/Demo">Demo</Link></li>
				</ul>
			</div>
		);
	}
}


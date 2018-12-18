import React, { Component } from 'react';
import { PropTypes } from 'mobx-react';


import Menu from './Menu';
import Header from './Header';
import Content from './Content';

import styles from './index.less';

export default class Index extends Component {
	static propTypes = {
		children: PropTypes.node,
	}
	render() {
		return (
			<div className={styles.container}>
				<Header />
				<Menu />
				<Content />
			</div>
		);
	}
}



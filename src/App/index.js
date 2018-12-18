import React, { Component } from 'react';
import Menu from './Menu';
import Content from './Content';
import { PropTypes } from 'mobx-react';

import styles from './index.less';

export default class Index extends Component {
	static propTypes = {
		children: PropTypes.node,
	}
	render() {
		return (
			<div className={styles.menuContainer}>
				<Menu />
				<Content />
			</div>
		);
	}
}



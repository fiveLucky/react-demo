import React, { Component } from 'react';
import { Layout } from 'antd';

import Menu from './Menu';
import Header from './Header';
import Content from './Content';

import styles from './index.less';

export default class Index extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Layout>
					<Menu />
					<Layout>
						<Header />
						<Content>{this.props.children}</Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}



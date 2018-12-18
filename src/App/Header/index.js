import React, { Component } from 'react';
import { Layout } from 'antd';


import styles from '../index.less';

const { Header: H } = Layout;


export default class Header extends Component {

	render() {
		return (
			<div className={styles.menuContainer}>
				<Layout>
					<H style={{ background: '#fff', padding: 0 }} />
				</Layout>
			</div>
		);
	}
}


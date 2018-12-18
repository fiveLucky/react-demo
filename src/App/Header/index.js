import React, { Component } from 'react';

import { Layout, Avatar, Badge } from 'antd';

import styles from '../index.less';

const { Header: H } = Layout;


export default class Header extends Component {

	render() {
		return (
			<H style={{ background: '#fff', padding: 0 }}>
				<div className={styles.avatar}>
					<span>
						<Badge count={1}><Avatar style={{ backgroundColor: '#1890ff' }} icon="user" shape="square" /></Badge>
					</span>
				</div>
			</H>
		);
	}
}


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout, Icon } from 'antd';
import { observer } from 'mobx-react';


import Model from './model';
import store from '../store';
import styles from '../index.less';

const { SubMenu } = Menu;
const { Sider } = Layout;

@observer
export default class Detail extends Component {
	render() {
		const { collapsed, onCollapse } = store;
		return (
			<div className={styles.menuContainer}>
				<Layout>
					<Sider
						collapsible
						collapsed={collapsed}
						onCollapse={onCollapse}
					>
						<Menu
							theme="dark"
							mode="inline"
						>
							{
								Model.map(item => {
									if (item.children.length > 0) {
										return (
											<SubMenu key={item.path}
												title={<span><Icon type="user" /><span>{item.navName}</span></span>}
											>
												{item.children.map(i => (<Menu.Item onClick={this.onClickMenu} key={i.path}>
													<Link to={i.path}>{i.navName}</Link>
												</Menu.Item>))}
											</SubMenu>
										);
									}
									return (<Menu.Item onClick={this.onClickMenu} key={item.path}>
										<Icon type="pie-chart" />
										<Link to={item.path}>{item.navName}</Link>
									</Menu.Item>);
								})
							}

						</Menu>
					</Sider>
				</Layout>
			</div>
		);
	}
}


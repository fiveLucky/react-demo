import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Layout, Icon } from 'antd';
import { observer } from 'mobx-react';


import store from '../store';
import styles from '../index.less';

const { SubMenu } = Menu;
const { Sider } = Layout;

@withRouter
@observer
export default class Detail extends Component {
	componentDidMount() {
		store.fetchMenuTree();
	}
	render() {
		const { collapsed, onCollapse, menuTree } = store;
		return (
			<div className={styles.menuContainer}>
				<Sider
					collapsible
					collapsed={collapsed}
					onCollapse={onCollapse}
					className={styles.sider}
				>
					<div className={styles.logoArea}><Icon type="github" className={styles.logoIcon} /></div>
					<Menu
						theme="dark"
						mode="inline"
					>
						{
							menuTree.map(item => {
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
									<Link className={styles.link} to={item.path}>{item.navName}</Link>
								</Menu.Item>);
							})
						}

					</Menu>
				</Sider>
			</div>
		);
	}
}


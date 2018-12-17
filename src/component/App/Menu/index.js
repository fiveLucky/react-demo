import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import style from './index.less';



export default class Detail extends Component {
	componentDidMount() {
	}

	render() {
		return (
			<div className={style.container}>
				<div className={style.menu}>
					<BrowserRouter>
						<ul>
							<li><Link to="/">首页</Link></li>
							<li><Link to="/Demo">Demo</Link></li>
						</ul>
					</BrowserRouter>
				</div>
				<div > </div>
			</div>
		);
	}
}


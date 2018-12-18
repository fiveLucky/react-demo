import React, { Component, lazy, Suspense } from 'react';
import { withRouter } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';

const DemoList = lazy(() => import('../../views/Demo'));
const Home = lazy(() => import('../../views/Home'));
import styles from '../index.less';


@withRouter
export default class Content extends Component {

	render() {
		const { path } = this.props.match;
		return (
			<div className={styles.contentContainer}>
				<div className={styles.contentBody}>
					<Suspense fallback={'loading'}>
						<Switch>
							<Route exact path={`${path}`} component={Home}></Route>
							<Route path={`${path}Demo`} component={DemoList}></Route>
						</Switch>
					</Suspense>
				</div>
			</div>
		);
	}
}


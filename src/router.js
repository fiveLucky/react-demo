
import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style/component';
import App from './App';


const DemoList = lazy(() => import(/* webpackChunkName: "./views/Demo" */ './views/Demo'));
const Home = lazy(() => import('./views/Home'));

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Suspense fallback={'loading'}>
            <Switch>
              <Route exact path={`/`} component={Home}></Route>
              <Route path={`/Demo`} component={DemoList}></Route>
            </Switch>
          </Suspense>
        </App>
      </BrowserRouter>
    );
  }
}

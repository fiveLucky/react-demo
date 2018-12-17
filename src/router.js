import React, { lazy, PureComponent, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './component/App';
const DemoList = lazy(() => import('./views/Demo'));
const Home = lazy(() => import('./views/Home'));

export default class RouterPage extends PureComponent {

  render() {
    return (
      <BrowserRouter >
        <Suspense fallback={() => 'loading'}>
          <Switch>
            <Route exact path="/" component={App}></Route>
            <Route path="/Home" component={Home}></Route>
            <Route path="/Demo" component={DemoList}></Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}
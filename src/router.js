import React, { lazy, PureComponent } from 'react';
import { Router, Route } from 'react-router';


const App = lazy(() => import('./App'));

export default class RouterPage extends PureComponent {

  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <Route></Route>
        </Route>
      </Router>
    );
  }
}
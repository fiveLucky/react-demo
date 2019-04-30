
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import './style/component';
import App from './App';

import DemoList from '!lazy./views/Demo';
import Home from '!lazy./views/Home';



export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path={`/web`} component={Home}></Route>
            <Route path={`/web/Demo`} component={DemoList}></Route>
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

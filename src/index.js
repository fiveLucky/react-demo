
import React from 'react';
import ReactDOM from 'react-dom';
import '$config/global';

import userConfig from '../project.config';

import Router from './router';

if (process.env.NODE_ENV === 'development' && userConfig.devServer.hot && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Router />, document.getElementById('app'));


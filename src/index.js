
import React from 'react';
import ReactDOM from 'react-dom';


import Router from './router';


ReactDOM.render(<Router />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
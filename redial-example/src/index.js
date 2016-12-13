import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './routes.js';
import reducer from './reducer.js';
import initialState from './initial-state.js';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root')
);

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');

const store = require('./store.js');

const App = require('../container/app.js');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementsByClassName('main-container')[0]
);

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

require('./observable-config.js');

const App = require('../container/app.js');

ReactDOM.render(
  <App />
  , document.getElementsByClassName('main-container')[0]
);

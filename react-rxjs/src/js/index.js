'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

require('./observable-config.js');

const App = require('../container/app.js');
const CounterApp = require('../container/counter-app.js');

ReactDOM.render(
  <CounterApp />
  , document.getElementsByClassName('main-container')[0]
);

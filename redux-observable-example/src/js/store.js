'use strict';

const {applyMiddleware, createStore} = require('redux');
const {combineEpics, createEpicMiddleware} = require('redux-observable');

const reducer = require('../js/reducer/index.js');
const {fetchUsersEpic} = require('../js/epic/index.js');

const rootEpic = combineEpics(
  fetchUsersEpic
);
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = applyMiddleware(
  epicMiddleware 
)(createStore)(reducer);

module.exports = store;

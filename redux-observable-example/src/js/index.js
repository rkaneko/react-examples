'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {createStore} = require('redux');

const App = require('../container/app.js');

const initialState = {
  name: 'React'
};

function reducer(state = initialState, action) {
  const {type, paylaod} = action;
  switch (type) {
  default:
      return state;
  }
}

const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementsByClassName('main-container')[0]
);

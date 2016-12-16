'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const UIRouterReact = require('ui-router-react').default;
const { UIView } = require('ui-router-react');

const App = require('../container/app.js');

const router = new UIRouterReact();
router.stateRegistry.register({
  name: 'home'
  , url: '/'
  , component: App
});
router.html5Mode(true);
router.start();

ReactDOM.render(
  <UIView />
  , document.getElementsByClassName('main-container')[0]
);

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const UIRouterReact = require('ui-router-react').default;
const { UIView } = require('ui-router-react');

const App = require('../container/app.js');
const peopleRepository = require('../js/repository/people-repository.js');

const router = new UIRouterReact();
router.stateRegistry.register({
  name: 'home'
  , url: '/'
  , component: App
  , resolve: [{
    token: 'people'
    , resolveFn: () => peopleRepository.findAll()
  }]
});
router.html5Mode(true);
router.start();

ReactDOM.render(
  <UIView />
  , document.getElementsByClassName('main-container')[0]
);

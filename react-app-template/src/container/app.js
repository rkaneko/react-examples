'use strict';

const React = require('react');
const { Component } = React;

const Header = require('../component/header.js');

class App extends Component {
  render() {
    return (
      <div>
        <Header />        
      </div>
    );
  }
}

module.exports = App;

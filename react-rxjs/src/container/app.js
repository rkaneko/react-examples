'use strict';

const React = require('react');
const { Component } = React;

// const Counter = require('../component/enhanced-counter-component.js');
const Counter = require('../component/counter-using-hoc.js');

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

module.exports = App;

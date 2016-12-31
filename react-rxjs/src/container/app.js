'use strict';

const React = require('react');
const { Component } = React;

const Counter = require('../component/enhanced-counter-component.js');

class App extends Component {
  render() {
    const props = { count: 1 };
    return (
      <div>
        <Counter {...props} />
      </div>
    );
  }
}

module.exports = App;

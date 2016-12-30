'use strict';

const React = require('react');
const { Component } = React;

const IncreasedCounter = require('../component/increased-counter.js');

class App extends Component {
  render() {
    const props = { count: 1 };
    return (
      <div>
        <IncreasedCounter {...props} />
      </div>
    );
  }
}

module.exports = App;

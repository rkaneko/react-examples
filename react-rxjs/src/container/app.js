'use strict';

const React = require('react');
const {Component} = React;

const Counter1 = require('../component/counter-using-component-from-stream.js');
const Counter2 = require('../component/counter-using-map-props-stream.js');

class App extends Component {
  render() {
    return (
      <div>
        <Counter1 />
        <Counter2 />
      </div>
    );
  }
}

module.exports = App;

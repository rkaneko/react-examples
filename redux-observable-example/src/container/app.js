'use strict';

const React = require('react');
const {Component} = React;
const {connect} = require('react-redux');

const Header = require('../component/header.js');

class App extends Component {
  render() {
    const {name} = this.props;
    return (
      <div>
        {name}
        <Header />        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const ConnectedApp = connect(mapStateToProps)(App);

module.exports = ConnectedApp;

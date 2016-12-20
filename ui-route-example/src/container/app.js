'use strict';

const React = require('react');
const {Component, PropTypes} = React;

const Header = require('../component/header.js');

class App extends Component {
  render() {
    const {people} = this.props.resolves;
    return (
      <div>
        <Header />
        <ul>
        {people.map((person, index) => {
          return (
            <li key={index}>{person.name}</li>
          );
        })}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  resolves: PropTypes.shape({
    people: PropTypes.arrayOf(PropTypes.object)
  })
};

module.exports = App;

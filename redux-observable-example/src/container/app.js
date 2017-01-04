'use strict';

const React = require('react');
const {Component} = React;
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');

const actions = require('../js/action/index.js');
const Header = require('../component/header.js');
const UsersList = require('../component/users-list.js');

class App extends Component {
  componentWillMount() {
    this.handleFetchUsers = this._handleFetchUsers.bind(this);
  }

  _handleFetchUsers(evt) {
    evt.preventDefault();
    const {fetchUsers} = this.props;
    fetchUsers();
  }

  render() {
    const {users} = this.props;
    return (
      <div>
        <Header />        
        <button type="button" onClick={this.handleFetchUsers}>fetch</button>
        <UsersList users={users} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

module.exports = ConnectedApp;

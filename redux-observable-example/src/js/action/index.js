'use strict';

const actionTypes = require('../action-type/index.js');

function fetchUsers() {
  return {
    type: actionTypes.FETCH_USERS
  };
}

function receiveUsers(users) {
  return {
    type: actionTypes.RECEIVE_USERS,
    payload: {users}
  };
}

module.exports = {
  fetchUsers,
  receiveUsers
};

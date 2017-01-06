'use strict';

const actionTypes = require('../action-type/index.js');

const initialState = {
  name: 'React',
  users: []
};

function reducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
  case actionTypes.RECEIVE_USERS:
  case actionTypes.FETCH_USERS_REJECTED:
    const {users} = payload;
    return {...state, users};
  default:
      return state;
  }
}

module.exports = reducer;

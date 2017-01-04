'use strict';

require('rxjs');

const actionTypes = require('../action-type/index.js');
const webApi = require('../adapter/web-api.js');

const fetchUsersEpic = action$ => (
  action$.ofType(actionTypes.FETCH_USERS)
    .do(action => console.log(action))
    .map(({payload}) => payload)
    .mergeMap(() => webApi.fetchUsers())
    .map(json => {
      const {users} = json;
      return {
        type: actionTypes.RECEIVE_USERS,
        payload: {users}
      };
    })
    .do(action => console.log(action))
);

module.exports = {
  fetchUsersEpic
};

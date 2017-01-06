'use strict';

const Rx = require('rxjs');

const actionTypes = require('../action-type/index.js');
const webApi = require('../adapter/web-api.js');

const fetchUsersEpic = action$ =>
  action$.ofType(actionTypes.FETCH_USERS)
    .do(action => console.log(action))
    .mergeMap(action =>
      Rx.Observable.fromPromise(webApi.fetchUsers())
        .map(json => {
          const {users} = json;
          return {
            type: actionTypes.RECEIVE_USERS,
            payload: {users}
          };
        })
        .catch(err => Rx.Observable.of({
          type: actionTypes.FETCH_USERS_REJECTED,
          payload: {users: []},
          error: true
        }))
    )
    .do(action => console.log(action));

module.exports = {
  fetchUsersEpic
};

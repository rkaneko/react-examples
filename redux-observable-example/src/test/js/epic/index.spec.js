'use strict';

const test = require('ava');
const Rx = require('rxjs');

const fetchMock = require('fetch-mock');
const configureMockStore = require('redux-mock-store').default;
const {combineEpics, createEpicMiddleware} = require('redux-observable');

const actionTypes = require('../../../js/action-type/index.js');
const {fetchUsersEpic} = require('../../../js/epic/index.js');

const users200Ok = require('./resources/200-users.json');

let epicMiddleware;
let rootEpic;
let mockStore;
let store;
test.before(t => {
  rootEpic = combineEpics(
    fetchUsersEpic
  );
  epicMiddleware = createEpicMiddleware(rootEpic);
  mockStore = configureMockStore([epicMiddleware]);
});

test.beforeEach(t => {
  store = mockStore();
});

test.afterEach(t => {
  fetchMock.restore();
  epicMiddleware.replaceEpic(rootEpic);
});

test('fetchUsersEpic', t => {
  // setup
  fetchMock.get(/apis\/users/, {
    body: users200Ok,
    status: 200
  });
  
  // exec
  store.dispatch({
    type: actionTypes.FETCH_USERS
  });

  // verify
  t.truthy(fetchMock.lastCall(/apis\/users/));
  return Rx.Observable.interval(500)
    .take(4)
    .mapTo(store.getActions())
    .first(actualActions => actualActions.length === 2)
    .map(actualActions => {
      return t.deepEqual(
        actualActions,
        [
          {
            type: actionTypes.FETCH_USERS
          },
          {
            type: actionTypes.RECEIVE_USERS,
            payload: {
              users: users200Ok.users
            }
          }
        ]);
    });
});

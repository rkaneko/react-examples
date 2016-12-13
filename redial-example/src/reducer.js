import initialState from './initial-state.js';
import actionTypes from './action-types.js';

function reducer(action, state = initialState) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.RECEIVE_ENTRIES:
      const entries = payload.entries;
      return Object.assign({}, state, { entries });
    default:
      return initialState;
  }
}

export default reducer;

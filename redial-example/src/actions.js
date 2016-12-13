import actionTypes from './action-types.js';

const dummy = [
  {
    title: 'Hajimeno Ippo'
    , body: 'Makunouchi Ippo is a boxer.'
  }
  , {
    title: 'Naruto'
    , body: `The Senju's rival is Uchiha.`
  }
];

function fetchEntries() {
  return {
    type: actionTypes.RECEIVE_ENTRIES
    , payload: {
      entries: dummy
    }
  };
}

const actions = { fetchEntries };
export default actions;

'use strict';

require('isomorphic-fetch');

function fetchUsers() {
  return fetch(`/apis/users`)
    .then(response => response.json());
}

module.exports = {
  fetchUsers
};

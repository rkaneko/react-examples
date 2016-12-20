'use strict';

const fetch = require('isomorphic-fetch');

function findAll() {
  return fetch(`apis/people.json`)
          .then(response => response.json())
          .catch(error => []);
}

const peopleRepository = {
  findAll
};

module.exports = peopleRepository;

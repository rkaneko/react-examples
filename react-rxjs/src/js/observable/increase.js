'use strict';

const Rx = require('rxjs');
require('rxjs/add/operator/do');
require('rxjs/add/operator/map');

const increase$ = Rx.Observable.interval(1000)
  .do(() => console.log('increase'))
  .map(() => state => Object.assign({}, state, { count: state.count + 1 }));

module.exports = increase$;

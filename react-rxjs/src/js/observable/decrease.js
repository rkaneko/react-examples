'use strict';

const Rx = require('rxjs');
require('rxjs/add/operator/do');
require('rxjs/add/operator/map');

const decrease$ = Rx.Observable.interval(2000)
  .do(() => console.log('decrease'))
  .map(() => state => Object.assign({}, state, { count: state.count - 1 }));

module.exports = decrease$;

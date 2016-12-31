'use strict';

const React = require('react');

const Rx = require('rxjs');
require('rxjs/add/operator/combineLatest');

const { componentFromStream } = require('recompose');

const Counter = require('./counter.js');
const increase$ = require('../js/observable/increase.js');
const decrease$ = require('../js/observable/decrease.js');

const state$ = Rx.Observable.merge(
  increase$,
  decrease$
).scan((state, changeFn) => changeFn(state), {
  count: 0
});

const EnhancedCounter = componentFromStream(props$ => {
  return props$.combineLatest(
    state$,
    (props, state) => {
      const nextProps = Object.assign({}, props, state);
      return (
        <Counter {...nextProps} />
      );
    }
  );
});

module.exports = EnhancedCounter;

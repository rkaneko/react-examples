'use strict';

const React = require('react');
const Rx = require('rxjs');
require('rxjs/add/operator/combineLatest');

const { mapPropsStream } = require('recompose');

const Counter = require('./counter.js');
const increase$ = require('../js/observable/increase.js');

const state$ = increase$.scan(
  (state, changeFn) => changeFn(state),
  { count: 0 }
);

const enhance = mapPropsStream(prop$ => {
  return prop$.combineLatest(
    state$,
    (props, state) => {
      const nextProps = Object.assign({}, props, state);
      return { ...nextProps };
    }
  );
});

const CounterHoC = enhance(props => {
  return <Counter {...props} />
});

module.exports = CounterHoC;

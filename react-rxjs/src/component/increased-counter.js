'use strict';

const React = require('react');

const Rx = require('rxjs');
require('rxjs/add/operator/do');
require('rxjs/add/operator/map');
require('rxjs/add/operator/combineLatest');

const { setObservableConfig, componentFromStream } = require('recompose');

const Counter = require('./counter.js');

setObservableConfig({
  fromESObservable: Rx.Observable.from
});

const increase = Rx.Observable.interval(1000)
  .do(() => console.log('increase'))
  .map(() => state => Object.assign({}, state, { count: state.count + 1 }));

const decrease = Rx.Observable.interval(2000)
  .do(() => console.log('decrease'))
  .map(() => state => Object.assign({}, state, { count: state.count - 1 }));

const state$ = Rx.Observable.merge(
  increase,
  decrease
).scan((state, changeFn) => changeFn(state), {
  count: 0
});

const IncreasedCounter = componentFromStream(props$ => {
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

module.exports = IncreasedCounter;

'use strict';

const React = require('react');
const {createEventHandler, mapPropsStream} = require('recompose');

const Counter = require('../component/counter.js');

const {stream, handler: handleIncrement} = createEventHandler();
const increment$ = stream.mapTo(1).startWith(0);

const count$ = increment$
  .scan((count, diff) => count + diff, 0);

const withCount = mapPropsStream(props$ => {
  return props$.combineLatest(
    count$,
    (props, count) => {
      const nextProps = {...props, count, handleIncrement};
      return {...nextProps};
    }
  );
});

const EnhancedCounter = withCount(props => {
  return <Counter {...props} />
});

module.exports = EnhancedCounter;

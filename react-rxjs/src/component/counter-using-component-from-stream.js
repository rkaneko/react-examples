'use strict';

const React = require('react');

const Rx = require('rxjs');

const {createEventHandler, componentFromStream} = require('recompose');

const {stream, handler: handleIncrement} = createEventHandler();
const increment$ = stream.mapTo(1).startWith(0);

const count$ = increment$
  .scan((count, diff) => count + diff, 0);

const Counter = ({count = 0, handleIncrement}) => {
  return (
    <div>
      Count: {count}
      <button type="button" onClick={handleIncrement}>+</button>
    </div>
  );
};
const EnhancedCounter = componentFromStream(props$ => {
  return props$.combineLatest(
    count$,
    (props, count) => {
      const nextProps = {...props, count, handleIncrement};
      return (
        <Counter {...nextProps} />
      );
    }
  );
});

module.exports = EnhancedCounter;

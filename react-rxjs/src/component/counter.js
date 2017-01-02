'use strict';

const React = require('react');

const Counter = ({count = 0, handleIncrement}) => {
  return (
    <div>
     Count: {count}
     <button type="button" onClick={handleIncrement}>+</button>
    </div>
  );
};

module.exports = Counter;

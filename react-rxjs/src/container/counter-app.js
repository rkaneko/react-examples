'use strict';

const React = require('react');
const {Component} = React;
const {createEventHandler} = require('recompose');

const Counter = require('../component/counter.js');

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  componentDidMount() {
    const {stream, handler} = createEventHandler();
    this.incrementSubscription = stream.mapTo(1).startWith(0).subscribe({
      next: v => {
        const count = this.state.count + v;
        const nextState = Object.assign({}, this.state, {count});
        this.setState(nextState);
        // if u need dispatch action for the global state, plz dipatch here.
        // dispatch(someAction);
      }
    });
    this.handleIncrement = handler;
  }

  componentWillUnmount() {
    if (this.incrementSubscription) {
      incrementSubscription.unsubscribe();
    }
  }

  render() {
    const {count} = this.state;
    const counterProps = {count, handleIncrement: this.handleIncrement};
    return (
      <Counter {...counterProps} />
    );
  }
}

module.exports = CounterApp;

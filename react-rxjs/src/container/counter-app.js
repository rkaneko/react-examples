'use strict';

const React = require('react');
const {Component} = React;
const {createEventHandler} = require('recompose');

const Counter = ({count = 0, handleCount}) => {
  return (
    <div>
     Count: {count}
     <button type="button" onClick={handleCount}>+</button>
    </div>
  );
};

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  componentDidMount() {
    const {stream, handler} = createEventHandler();
    this.countSubscription = stream.subscribe({
      next: diff => {
        const count = this.state.count + diff;
        const nextState = Object.assign({}, this.state, {count});
        this.setState(nextState);
        // if u need dispatch action for the global state, plz dipatch here.
        // dispatch(someAction);
      }
    });
    this.countEmitter = handler;
  }

  componentWillUnmount() {
    if (this.countSubscription) {
      countSubscription.unsubscribe();
    }
  }

  handleCount(evt) {
    evt.preventDefault();
    const diff = 1;
    this.countEmitter(diff);
  }

  render() {
    const handleCount = this.handleCount.bind(this);
    const {count} = this.state;
    const counterProps = {count, handleCount};
    return (
      <div>
        <Counter {...counterProps} />
      </div>
    );
  }
}

module.exports = CounterApp;

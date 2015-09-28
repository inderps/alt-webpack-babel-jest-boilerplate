import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import CounterActions from './../../actions/CounterActions';
import CounterStore from './../../stores/CounterStore';

class Counter extends Component {
  static getStores() {
    return [CounterStore];
  }

  static getPropsFromStores() {
    return CounterStore.getState();
  }

  increment() {
    CounterActions.increment();
  }

  render() {
    return (<div className="counter-container">
      <div className="counter">{this.props.counter}</div>
      <button onClick={this.increment}>
        Increment
      </button>
    </div>);
  }
}
Counter = connectToStores(Counter);
Counter.propTypes = { counter: React.PropTypes.number };
export default Counter;

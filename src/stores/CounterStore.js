import alt from './../alt';
import CounterActions from './../actions/CounterActions';

class CounterStore {
  constructor() {
    this.bindListeners({increment: CounterActions.increment});
    this.counter = 0;
  }

  increment() {
    this.counter = this.counter + 1;
  }
}

export default alt.createStore(CounterStore, 'CounterStore');

import alt from './../alt';

class CounterActions {
  increment() {
    this.dispatch();
  }
}

export default alt.createActions(CounterActions);

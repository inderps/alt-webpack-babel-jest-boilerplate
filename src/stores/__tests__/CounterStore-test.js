jest.autoMockOff();
const CounterStore = require('../CounterStore');
const CounterActions = require('../../actions/CounterActions');

describe('CounterStore', () => {
  it('should increment the counter', () => {
    expect(CounterStore.getState().counter).toBe(0);

    CounterActions.increment();

    expect(CounterStore.getState().counter).toBe(1);

    CounterActions.increment();

    expect(CounterStore.getState().counter).toBe(2);
  });
});

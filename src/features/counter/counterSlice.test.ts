import CounterReducers, { CounterState, increment, decrement, incrementByAmount } from './counterSlice';

const initialState: CounterState = {
  value: 3,
  status: 'idle',
};

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(CounterReducers(undefined, { type: '' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('increment', () => {
    expect(CounterReducers(initialState, increment()).value).toBe(4);
  });

  it('decrement', () => {
    expect(CounterReducers(initialState, decrement()).value).toBe(2);
  });

  it('incrementByAmount', () => {
    expect(CounterReducers(initialState, incrementByAmount(100)).value).toBe(103);
    expect(CounterReducers(initialState, incrementByAmount(-100)).value).toBe(-97);
  });
});

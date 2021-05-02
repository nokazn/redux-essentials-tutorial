import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// interface CounterState {
//   value: number;
// }

// interface CounterReducers<S> {
//   increment: (state: S) => void;
//   decrement: (state: S) => void;
//   incrementByAmount: (state: S, action: PayloadAction<number>) => void;
// }

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number, ms?: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, ms ?? 1000);
};

export const selectCounter = (state: RootState) => state.counter.value;

export default counterSlice.reducer;

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, incrementAsync, selectCounter } from './counterSlice';
import styles from './Counter.module.scss';

export const Counter = () => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label='Increment Value' onClick={() => dispatch(increment())}>
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label='Decrement Value' onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>

      <div className={styles.row}>
        <input
          className={styles.textBox}
          aria-label='Set increment amount'
          value={Number(incrementAmount) ?? 0}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(Number(incrementAmount) ?? 0))}>
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(Number(incrementAmount) ?? 0))}>
          Add Async
        </button>
      </div>
    </div>
  );
};

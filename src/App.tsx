import styles from './App.module.scss';
import Counter from './features/counter';

function App() {
  return (
    <div className={styles.app}>
      <Counter />
    </div>
  );
}

export default App;

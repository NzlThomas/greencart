import ItemsList from "./components/ItemsList/ItemsList";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.listContainer}>
        <ItemsList />
      </div>
    </>
  );
}

export default App;

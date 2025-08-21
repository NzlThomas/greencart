import { Link } from "react-router-dom";
import ItemsList from "./components/ItemsList/ItemsList";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import styles from "./App.module.css";
import { HiShoppingCart } from "react-icons/hi";

function App() {
  const { cartLength } = useContext(CartContext);
  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.title}>Chaud-PingKart</h1>
        <Link to="cart" className={styles.cartWrapper}>
          <HiShoppingCart color="white" size={30} />
          {cartLength > 0 && (
            <span className={styles.cartBadge}>{cartLength}</span>
          )}
        </Link>
      </nav>
      <div className={styles.listContainer}>
        <ItemsList />
      </div>
    </>
  );
}

export default App;

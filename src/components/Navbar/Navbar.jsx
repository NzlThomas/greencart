import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { HiShoppingCart } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { IoIosLeaf } from "react-icons/io";

function Navbar() {
  const { cartLength } = useContext(CartContext);
  return (
    <nav className={styles.nav}>
      <div className={styles.homeContainer}>
        <Link to="/" className={styles.title}>
          <IoIosLeaf size={30} />
          GreenCart
        </Link>
        <Link to="/" className={styles.navLink}>
          <HiHome color="white" size={30} /> Accueil
        </Link>
      </div>

      <Link to="cart" className={styles.cartWrapper}>
        <HiShoppingCart color="white" size={30} />
        {cartLength > 0 && (
          <span className={styles.cartBadge}>{cartLength}</span>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;

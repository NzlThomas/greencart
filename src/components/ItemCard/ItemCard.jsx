import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ItemCard.module.css";

function ItemCard({ article }) {
  const { quantity, setQuantity, addToCart } = useContext(CartContext);

  return (
    <div key={article.id} className={styles.itemCard}>
      <img
        alt={article.title}
        src={article.image}
        className={styles.productImage}
      />
      <p className={styles.productName}>{article.title}</p>
      <p className={styles.productPrice}>{article.price}€</p>
      <div className={styles.quantityFlex}>
        <p>Quantité :</p>
        <div className={styles.quantityAdjust}>
          <button
            type="button"
            onClick={() =>
              setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1))
            }
            className={styles.quantityButton}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity === 0 ? "" : quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className={styles.quantityInput}
            name="qty"
            onBlur={() => {
              if (quantity === 0) setQuantity(1);
            }}
          />

          <button
            type="button"
            onClick={() => setQuantity((prevQty) => prevQty + 1)}
            className={styles.quantityButton}
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => addToCart(article)}
        className={styles.cartButton}
      >
        Ajouter au panier
      </button>
    </div>
  );
}

export default ItemCard;

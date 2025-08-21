import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ItemCard.module.css";

function ItemCard({ article }) {
  const { quantity, setQuantity, addToCart } = useContext(CartContext);

  return (
    <div key={article.id}>
      <img
        alt={article.title}
        src={article.image}
        className={styles.productImage}
      />
      <p>{article.title}</p>
      <p>{article.price} €</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button type="button" onClick={() => addToCart(article)}>
        Ajouter au panier
      </button>
    </div>
  );
}

export default ItemCard;

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartList.module.css";
import { FaTrash } from "react-icons/fa";
import { BsFillCartXFill } from "react-icons/bs";

function CartList() {
  const {
    cart,
    total,
    addToCart,
    decreaseQuantity,
    deleteItem,
    emptyCart,
    cartLength,
  } = useContext(CartContext);

  function handleOrder() {
    alert("Merci pour votre commande fictive !");
    emptyCart();
  }

  return (
    <>
      {cartLength !== 0 ? (
        <div className={styles.gridContainer}>
          <div className={styles.cartListContainer}>
            {cart.map((ele) => (
              <div key={ele.title} className={styles.productContainer}>
                <div className={styles.imgCardContainer}>
                  <img
                    alt={ele.title}
                    src={ele.image}
                    className={styles.productImage}
                  />
                  <p>{ele.title}</p>
                </div>

                <p className={styles.productPrice}>{ele.price}€</p>

                <div className={styles.quantityContainer}>
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(ele)}
                    className={styles.quantityButton}
                  >
                    -
                  </button>
                  <p className={styles.quantityText}>
                    Quantité : {ele.quantity}
                  </p>
                  <button
                    type="button"
                    onClick={() => addToCart(ele)}
                    className={styles.quantityButton}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => deleteItem(ele)}
                  className={styles.removeProduct}
                >
                  <FaTrash />
                  Retirer du panier
                </button>
              </div>
            ))}
          </div>

          <div className={styles.orderActions}>
            <button
              type="button"
              onClick={() => emptyCart()}
              className={styles.emptyCart}
            >
              Vider mon panier
            </button>
            <div className={styles.orderContainer}>
              <p className={styles.orderTotal}>
                Sous-total : {Math.round(total * 100) / 100}€
              </p>
              <button
                className={styles.orderButton}
                type="button"
                onClick={() => handleOrder()}
              >
                Passer ma commande ({cartLength}{" "}
                {cartLength > 1 ? "articles" : "article"})
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.isEmptyContainer}>
          <div className={styles.isEmpty}>
            <BsFillCartXFill
              size={100}
              opacity={"10%"}
              className={styles.isEmptyChild}
            />
            <p className={styles.isEmptyChild}>Votre panier est vide !</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CartList;

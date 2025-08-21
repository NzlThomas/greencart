import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartList() {
  const { cart, total, addToCart, decreaseQuantity, deleteItem, emptyCart } =
    useContext(CartContext);

  return (
    <div>
      <div>
        <p>Mon panier :</p>

        <ul>
          {cart.map((ele) => (
            <li key={ele.title}>
              {ele.title} = {ele.price} €{" "}
              <button type="button" onClick={() => decreaseQuantity(ele)}>
                -
              </button>{" "}
              Quantité : {ele.quantity}{" "}
              <button type="button" onClick={() => addToCart(ele)}>
                +
              </button>
              <button type="button" onClick={() => deleteItem(ele)}>
                Retirer du panier
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => emptyCart()}>
          Vider mon panier
        </button>
        <p>total : {Math.round(total * 100) / 100} €</p>
      </div>
      <Link to="/">Retourner à l'accueil</Link>
    </div>
  );
}

export default CartList;

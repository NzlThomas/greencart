import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const list = [
    {
      id: 1,
      title: "Banane",
      price: 10,
    },
    {
      id: 2,
      title: "Tomate",
      price: 5,
    },
    {
      id: 3,
      title: "Télévision",
      price: 2,
    },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addToCart(article) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === article.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === article.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...article,
            quantity: 1,
          },
        ];
      }
    });
    setTotal((prevTotal) => prevTotal + article.price);
  }

  function decreaseQuantity(article) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === article.id);

      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === article.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== article.id);
      }
    });

    setTotal((prevTotal) => prevTotal - article.price);
  }

  function deleteItem(item) {
    const itemPrice = item.price;
    const totalToRemove = itemPrice * item.quantity;
    setCart((prevCart) => prevCart.filter((article) => article.id !== item.id));
    setTotal((prevTotal) => prevTotal - totalToRemove);
  }

  return (
    <>
      <nav>
        Aller voir votre cart : <Link to="cart">Cart</Link>
      </nav>
      <div>
        <p>Liste des articles :</p>

        {list.map((article) => (
          <div key={article.id}>
            <p>{article.title}</p>
            <p>{article.price} €</p>
            <button type="button" onClick={() => addToCart(article)}>
              Ajouter au panier
            </button>
          </div>
        ))}

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
        <p>total : {total} €</p>
      </div>
    </>
  );
}

export default App;

import { createContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  function addToCart(article) {
    const existingItem = cart.find((item) => item.id === article.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === article.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...article, quantity: quantity }]);
    }

    setTotal((prevTotal) => prevTotal + article.price * quantity);
    setQuantity(1);
  }

  function decreaseQuantity(article) {
    const existingItem = cart.find((item) => item.id === article.id);

    if (existingItem && existingItem.quantity > 1) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === article.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => prevCart.filter((item) => item.id !== article.id));
    }

    setTotal((prevTotal) => prevTotal - article.price);
  }

  function deleteItem(item) {
    const itemPrice = item.price;
    const totalToRemove = itemPrice * item.quantity;
    setCart((prevCart) => prevCart.filter((article) => article.id !== item.id));
    setTotal((prevTotal) => prevTotal - totalToRemove);
  }

  function emptyCart() {
    setCart([]);
    setTotal(0);
  }

  const cartLength = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        total,
        setTotal,
        quantity,
        setQuantity,
        addToCart,
        decreaseQuantity,
        deleteItem,
        emptyCart,
        cartLength,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

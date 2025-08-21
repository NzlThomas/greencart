import { Link } from "react-router-dom";
import ItemsList from "./components/ItemsList/ItemsList";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function App() {
  const { cartLength } = useContext(CartContext);
  return (
    <>
      <nav>
        Aller voir votre cart : <Link to="cart">Cart</Link>
      </nav>
      <p>Panier : {cartLength}</p>

      <ItemsList />
    </>
  );
}

export default App;

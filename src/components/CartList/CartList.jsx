import { Link } from "react-router-dom";

function CartList() {
  return (
    <div>
      <p>Bonjour je suis le composant CartList</p>
      <Link to="/">Retourner à l'accueil</Link>
    </div>
  );
}

export default CartList;

import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";

function ItemsList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Server error");
        }
        const data = await response.json();
        setProducts(data.slice(0, 6));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Chargement des articles en cours...</p>;
  if (error)
    return (
      <p>
        Oh non ! Une erreur est survenue, veuillez réessayer dans quelques
        instants.
      </p>
    );

  return (
    <>
      {products.map((article) => (
        <ItemCard article={article} key={article.id} />
      ))}
    </>
  );
}

export default ItemsList;

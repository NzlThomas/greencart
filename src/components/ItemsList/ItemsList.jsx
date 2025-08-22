import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./ItemsList.module.css";
import { FaHourglassHalf } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";

function ItemsList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Server error");
        }
        const data = await response.json();
        setProducts(data.slice(8, 17));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <p className={styles.loaderContainer}>
        <FaHourglassHalf />
        Chargement des articles en cours...
      </p>
    );
  if (error)
    return (
      <p>
        Oh non ! Une erreur est survenue, veuillez réessayer dans quelques
        instants.
      </p>
    );

  return (
    <>
      <div className={styles.searchContainer}>
        <HiMagnifyingGlass size={25} />
        <input
          onChange={(e) => setValue(e.target.value)}
          name="search"
          value={value}
          placeholder="Rechercher un article"
          className={styles.searchInput}
        />
      </div>

      <div className={styles.listContainer}>
        {products
          .filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
          )
          .map((article) => (
            <ItemCard article={article} key={article.id} />
          ))}
      </div>
    </>
  );
}

export default ItemsList;

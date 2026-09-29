import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./ItemsList.module.css";
import { HiMagnifyingGlass } from "react-icons/hi2";

function ItemsList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [infos, setInfos] = useState(false);

  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
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

  return (
    <>
      {loading ? (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
          <p>Chargement des articles en cours...</p>
        </div>
      ) : error ? (
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>
            Une erreur est survenue, veuillez réessayer dans quelques instants.
          </p>
          <p
            onClick={() => setInfos((prev) => !prev)}
            className={styles.seeMore}
          >
            En savoir plus
          </p>
          {infos && (
            <p className={styles.detailsMessage}>
              Greencart utilise{" "}
              <a
                className={styles.link}
                target="_blank"
                href="https://fakestoreapi.com/"
              >
                Fake Store API
              </a>{" "}
              pour simuler les articles de sa boutique. Il est possible que
              l'API soit momentanément indisponible.
            </p>
          )}
        </div>
      ) : (
        <>
          <h1 className={styles.srOnly}>Liste des articles</h1>
          <div className={styles.searchContainer}>
            <HiMagnifyingGlass size={25} />
            <label for="search" className={styles.srOnly}>
              Rechercher un article
            </label>
            <input
              onChange={(e) => setValue(e.target.value)}
              name="search"
              value={value}
              placeholder="Rechercher un article"
              id="search"
              className={styles.searchInput}
            />
          </div>

          <div className={styles.listContainer}>
            {products
              .filter((item) =>
                item.title.toLowerCase().includes(value.toLowerCase()),
              )
              .map((article) => (
                <ItemCard article={article} key={article.id} />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default ItemsList;

import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import { useEffect, useState } from "react";
import { getProducts } from "/src/Config/firebaseConfig.js";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const start = Date.now();
        const productsFromFirebase = await getProducts();
        const end = Date.now();
        const elapsedTime = end - start;
        const remainingTime = Math.max(0, 1000 - elapsedTime);
        setTimeout(() => {
          if (category) {
            const productsFilter = productsFromFirebase.filter((product) => product.category === category);
            setProducts(productsFilter);
          } else {
            setProducts(productsFromFirebase);
          }
          setLoading(false);
        }, remainingTime);
      } catch (error) {
        console.error("Error de:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.text} style={{ marginTop: '5px' }}>{greeting}</p>
      </div>
      <div className="text-center">
        {loading ? (
          <p>
            <span
              className="spinner-border text-primary"
              role="status"
              aria-hidden="true"
            ></span>{" "}
            Cargando...
          </p>
        ) : (
          <ItemList  products={products} />
        )}
      </div>
    </div>
  );
};

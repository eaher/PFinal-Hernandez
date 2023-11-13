import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../productMock";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then( (resp) => {
        if (category) {
          const productsFilter = resp.filter(product => product.category === category);
          setProducts(productsFilter);
        } else {
          setProducts(resp);
        }
      })
      .catch((error) => console.log(error));

  }, [category]);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.text}>{greeting}</p>
      </div>
      <ItemList products={products} />
    </>
  );
};

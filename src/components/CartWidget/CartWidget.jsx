import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import styles from "./CartWidget.module.css";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <>
      <Link to="/cart" className={`cart-widget-container cart ${styles["cartContainer"]}`}>
        <FaShoppingCart className={`${styles["cartIcon"]} bootstrap-cart-icon`} size={20} />
        <span className={`cart-count ${styles["cartCount"]}`}>{getTotalItems()}</span>
      </Link>
    </>
  );
};

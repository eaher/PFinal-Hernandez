import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.module.css";

export const CartWidget = () => {
  return (
    <>
      <div className= "cart-widget-container">
        <FaShoppingCart className="cart-icon" size={20} />
        <span className="cart-count"> 0 </span>
      </div>
    </>
  );
};

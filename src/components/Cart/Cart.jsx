import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { updateProductStock } from "../../Config/firebaseConfig";

export const Cart = () => {
    const { cart, removeFromCart, clearCart, updateProductStock } = useContext(CartContext);
    const [showCheckout, setShowCheckout] = useState(false);

    const handleCheckout = async () => {
        // Cerrar el formulario de checkout
        setShowCheckout(false);
        // Limpiar el carrito después de la compra
        clearCart();
        console.log("Carrito limpiado después de la compra.");

        // Actualizar el stock después de la compra
        for (const product of cart) {
            const newStock = product.stock - product.quantity;
            await updateProductStock(product.id, newStock);
        }

        console.log("Stock actualizado en Firebase después de la compra.");
    };

    const handleShowCheckout = () => {
        console.log("Mostrar modal de checkout");
        setShowCheckout(true);
    };

    const handleCloseCheckout = () => {
        console.log("Cerrar modal de checkout");
        setShowCheckout(false);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Carrito de Compras</h2>
            {cart.map((product) => (
                <div key={product.id} className="mb-4 p-3 border d-flex flex-row flex-sm-row align-items-center justify-content-between">
                    <div className="d-flex align-items-center mb-3 mb-sm-0">
                        <img src={product.urlImg} alt={product.name} className="img-thumbnail me-3" style={{ maxWidth: "70px", maxHeight: "70px" }} />
                        <div className="ms-3">
                            <p className="mb-1">Nombre: {product.name}</p>
                            <p className="mb-1">Cantidad: {product.quantity}</p>
                            <p className="mb-1">Precio Unitario: ${product.price}</p>
                        </div>
                    </div>
                    <div>
                        <p>Precio Total: ${product.quantity * product.price}</p>
                        <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
            {/* Botón Comprar */}
            <Button className="btn btn-primary mt-3" onClick={handleShowCheckout}>
                Comprar
            </Button>
            {/* Formulario de Checkout */}
            <CheckoutForm show={showCheckout} handleClose={handleCloseCheckout} onCheckout={handleCheckout} cart={cart} />
            {/* Botones Limpiar Carrito y Volver */}
            <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-danger" onClick={() => clearCart()}>
                    Limpiar Carrito
                </button>
                <Link to="/" className="btn btn-secondary">
                    Volver
                </Link>
            </div>
        </div>
    );
};

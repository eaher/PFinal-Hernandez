import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, updateProductStock } from "../../Config/firebaseConfig"; 

export const CheckoutForm = ({ show, handleClose, onCheckout, cart }) => {
    const [buyerInfo, setBuyerInfo] = useState({
        name: "",
        phone: "",
        email: "",
    });
    const [orderId, setOrderId] = useState(null);

    // Verificar si el carrito está vacío
    const isCartEmpty = cart.length === 0;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuyerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const calculateTotalCompra = () => {
        return cart.reduce((total, product) => total + product.quantity * product.price, 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificar nuevamente si el carrito está vacío
        if (isCartEmpty) {
            alert("Carrito vacío, agrega al menos un producto para continuar.");
            handleClose();
            return;
        }

        const orderItems = cart.map((product) => ({
            id: product.id,
            name: product.name,
            quantity: product.quantity,
            unitPrice: product.price,
            totalPrice: product.quantity * product.price,
        }));

        const orderData = {
            name: buyerInfo.name,
            phone: buyerInfo.phone,
            email: buyerInfo.email,
            items: orderItems,
            totalCompra: calculateTotalCompra(),
            date: serverTimestamp(),
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), orderData);
            const newOrderId = docRef.id;
            setOrderId(newOrderId);
            onCheckout(newOrderId);

            for (const product of cart) {
                const newStock = product.stock - product.quantity;
                console.log(`Updating stock for product ${product.id} to ${newStock}`);
                await updateProductStock(product.id, newStock);
            }
        } catch (error) {
            console.error("Error al crear la orden:", error);
        }

        handleClose();
    };

    return (
        <>
            {/* Modal finalizar compra*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Finalizar Compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isCartEmpty ? (
                        <p>Carrito vacío, agrega al menos un producto para continuar.</p>
                    ) : (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresa tu nombre"
                                    name="name"
                                    value={buyerInfo.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Ingresa tu teléfono"
                                    name="phone"
                                    value={buyerInfo.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    name="email"
                                    value={buyerInfo.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Finalizar Compra
                            </Button>
                        </Form>
                    )}
                </Modal.Body>
            </Modal>
            {/* Modal compra exitosa*/}
            <Modal show={orderId !== null} onHide={() => setOrderId(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Compra Exitosa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Su compra fue realizada con éxito. Orden ID: <strong>{orderId}</strong></p>
                </Modal.Body>
            </Modal>
        </>
    );
};

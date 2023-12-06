import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Count } from "../Count/Count";
import { getProduct } from "/src/Config/firebaseConfig.js";
import { useState, useEffect, useContext } from "react";
import { Spinner } from "react-bootstrap";
import { CartContext } from '/src/CartContext/CartContext';
import styles from "./ItemDetail.module.css";

export const ItemDetail = ({ id }) => {
    const [product, setProduct] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const { addToCart, getProductStock } = useContext(CartContext);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productFromFirebase = await getProduct(id);
                setProduct(productFromFirebase);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [id]);
    const handleAddToCart = () => {
        const availableStock = getProductStock(id);
        const updatedStock = availableStock - selectedQuantity;
        if (updatedStock >= 0) {
            addToCart({ ...product, quantity: selectedQuantity });
            setProduct((prevProduct) => ({ ...prevProduct, stock: updatedStock }));
            setSelectedQuantity(0);
        } else {
            console.warn("No hay suficiente stock disponible.");
        }
    };
    if (!product) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        );
    }
    const { name, description, price, stock, urlImg } = product;
    return (
        <div className="card border  shadow  rounded-3 col-12 col-md-6 col-lg-4 mb-4 p-3 m-2 mx-auto">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <img src={urlImg} alt="" className="card-img-top" />
                    <p className={`card-text ${styles["description"]}`}>{description}</p>
                    <p>Precio: $ <strong>{price}</strong></p>
                    {stock === 0 ? (
                        <p  className={`text-danger ${styles["danger"]}`}>Sin stock</p>
                    ) : (
                        <>
                            <p >Unidades disponibles <strong  className={`${styles["unit"]}`}>{stock}</strong></p>
                            <Count max={stock} onIncrement={() => setSelectedQuantity((prevCount) => prevCount + 1)} onDecrement={() => setSelectedQuantity((prevCount) => prevCount - 1)} />
                            <button className="btn btn-primary" onClick={handleAddToCart}>
                                Agregar al carrito
                            </button>
                        </>
                    )}
                    <Link to={"/"}>
                        <Button text="Volver" variant={"btn-secondary"} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

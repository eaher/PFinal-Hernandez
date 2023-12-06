import { createContext, useState, useEffect } from "react";
import { getProducts } from "../Config/firebaseConfig";
export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [productsWithStock, setProductsWithStock] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsFromFirebase = await getProducts();
                const updatedProducts = productsFromFirebase.map((product) => {
                    const productInCart = cart.find((cartItem) => cartItem.id === product.id);
                    const cartQuantity = productInCart ? productInCart.quantity : 0;
                    const updatedStock = product.stock - cartQuantity;
                    return {
                        ...product,
                        stock: updatedStock >= 0 ? updatedStock : 0,
                    };
                });
                setProductsWithStock(updatedProducts);
            } catch (error) {
                console.error("Error de carga:", error);
            }
        };
        fetchProducts();
    }, [cart]);
    const addToCart = (item) => {
        const existingProductIndex = cart.findIndex((product) => product.id === item.id);
        if (existingProductIndex !== -1) {
            const updatedCart = cart.map((product, index) =>
                index === existingProductIndex ? { ...product, quantity: product.quantity + item.quantity } : product
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item }]);
        }
    };
    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };
    const clearCart = () => {
        setCart([]);
    };
    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };
    const getProductStock = (productId) => {
        const productWithStock = productsWithStock.find((product) => product.id === productId);
        return productWithStock ? productWithStock.stock : 0;
    };
    const objectProvider = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        productsWithStock,
        getProductStock,
    };
    return <CartContext.Provider value={objectProvider}>{children}</CartContext.Provider>;
};

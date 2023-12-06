import "./ItemDetailContainer.module.css"
import { useEffect, useState } from "react";
import { getProduct } from "../../../src/Config/firebaseConfig";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productFromFirebase = await getProduct(id);
                setProduct(productFromFirebase);
            } catch (error) {
                console.error("Error de carga:", error);
            }
        };

        fetchProduct();
    }, [id]);

    return <div>{product && <ItemDetail {...product} />}</div>
};

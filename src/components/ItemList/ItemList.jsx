import { Card } from "../Card/Card";

export const ItemList = ({ products, isLoading }) => {
    return (
        <div className="row justify-content-center flex-wrap">
            {isLoading ? (
                <p className="text-center">
                    <span
                        className="spinner-border"
                        role="status"
                        aria-hidden="true"
                    ></span>{" "}
                    Cargando...
                </p>
            ) : (
                products.map((product) => (
                    <Card key={product.id} {...product} />
                ))
            )}
        </div>
    );
};

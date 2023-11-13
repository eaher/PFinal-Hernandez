import { Link } from "react-router-dom";
import { products } from "../../productMock";
import { Button } from "../Button/Button";
import { Count } from "../Count/Count";

export const Card = ({ id, name, urlImg, stock,  }) => {
    console.log(urlImg);
    return (
        <div className="card border border-dark rounded-3 col-12 col-md-3 mb-4 p-3 m-2 ">
            <h5 className="card-title"> {name} </h5>
            <div className="position-relative overflow-hidden mb-5">
                <img src={urlImg} alt="" className="card-img-top" />
            </div>
            <div className="position-absolute bottom-0 start-0 p-3 mt-5 ">
                <Count max={stock} />
                <Button text="Agregar al carrito" variant={"btn-secondary"} />
                <Link to={`item/${id}`}>
                    <button className="btn btn-outline-secondary">Detalles</button>
                </Link>


            </div>
        </div>
    );
};

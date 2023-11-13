import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { Count } from "../Count/Count"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ description, price, stock, name, urlImg }) => {
    const onAdd = (items) => {
        alert(`Se agregaron ${items} al carrito`)
    }

    return (
        <div className="card border border-dark rounded-3 col-12 col-md-3 mb-4 p-3 m-2 mx-auto">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <img src={urlImg} alt="" className="card-img-top" />
                    <p className="card-text">{description}</p>
                    <p>Precio: {price}</p>
                    <p>Unidades disponibles {stock}</p>
                    <Count max={stock} onAdd={onAdd} />
                    <Link to={"/"}>
                    <Button text="Volver" variant={"btn-secondary"} />
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}
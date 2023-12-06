import { Link } from "react-router-dom";
import { getProducts } from "../../Config/firebaseConfig";
import styles from "./Card.module.css";

export const Card = ({ id, name, urlImg }) => {
    return (
        <div className={`card  rounded-3 col-12 col-md-3 mb-4 p-3 m-2 ${styles["cardBox"]}`}>
            <h5 className="card-title"> {name} </h5>
            <div className="position-relative overflow-hidden mb-5">
                <img src={urlImg} alt="" className="card-img-top" />
            </div>
            <div className="position-absolute bottom-0 start-0 p-3 mt-5 ">
                <Link to={`item/${id}`}>
                    <button className={`btn btn-outline-secondary ${styles["button"]}`}>Detalles</button>
                </Link>
            </div>
        </div>
    );
};

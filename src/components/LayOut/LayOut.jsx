import './LayOut.module.css';
import { ItemList } from "../ItemList/ItemList";

export const LayOut = () => {
    return (

        <>
            <div>
                <h2>Componente LayOut</h2>
                <div className={`container ${styles["body"]}`} >
                <ItemList/>

                </div>
            </div>
        </>

    );
};

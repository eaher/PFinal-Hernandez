import { useState, useEffect } from "react";
import { Button } from "../Button/Button";

export const Count = ({ initial = 0, max, onIncrement, onDecrement }) => {
    const [count, setCount] = useState(initial);
    const increment = () => {
        if (count < max) {
            setCount((prevCount) => prevCount + 1);
            onIncrement(); // Llamo a la función de incremento del padre
        }
    };
    const decrement = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
            onDecrement(); // Llamo a la función de decremento del padre
        }
    };
    useEffect(() => {
        setCount(0); // Reseteo contador cuando cambia el productId
    }, [max]);
    return (
        <>
            <Button text="+" functionClick={increment} />
            <strong>{count}</strong>
            <Button text="-" functionClick={decrement} />
        </>
    );
};

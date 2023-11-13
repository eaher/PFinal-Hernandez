import { useState } from "react";

export const Promises = () => {

    const [response, setResponse] = useState("");
    //Forma clasica de resolver una promesa
    const task = new Promise((resolver, reject) => {
        //Callback, funcion flecha con dos parametros
        const condition = true;
        if (condition) {
            resolver("Tarea cumplida");
        } else {
            reject("Tarea rechazada");
        }
    })
    const resolvePromise = async () => {
        try { //es el equivalente al then
            const resp = await task; //Esperar que task de respueta
            setResponse(resp);
        } catch (error) {
            setResponse(error);
        }
    }
    resolvePromise();
    return (
        <>
            <h1>Promises</h1>
            <h4>Respuesta a nuetra promesa: {response}</h4>
        </>
    )
};

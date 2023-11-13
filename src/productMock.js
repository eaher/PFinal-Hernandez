export const products = [
    {
        id: "1",
        name: "2DMHS ",
        category:"motores",
        description: "2 Tiempos de 2 a 50 Hp. Motor portátil, de fácil operación y mantenimiento. Cuenta con 5 capas de pintura anticorrosiva y ánodos para evitar la corrosión del motor. Ideal para aquellos que buscan la durabilidad y practicidad para las embarcaciones pequeñas.",
        stock: 4,
        urlImg: "https://www.yamaha-motor.com.ar/images/productos/229c68a31e1c2dd9edad5257057010a8_md.webp",
        price: "100000"
    },

    {
        id: "2",
        name: "3BMHS ",
        category:"motores",
        description: "2 Tiempos de 2 a 50 Hp. Se trata de un motor que por sus prestaciones y diseño compacto resulta cómodo para trasladar, mientras que su fácil operación y mantenimiento lo convierten en un producto confiable. Posee 5 capas de pintura anticorrosiva y ánodos para evitar la corrosión del motor. El motor 3AMHS ofrece durabilidad y practicidad con aplicación en embarcaciones pequeñas.",
        stock: 8,
        urlImg: "https://www.yamaha-motor.com.ar/images/productos/8513134a849cd1814c7b4f7b1be1b0df_md.webp",
        price: "120000"
    },

    {
        id: "3",
        name: "4CMHS ",
        category:"motores",
        description: "2 Tiempos de 2 a 50 Hp. Motor portátil, ligero y con un diseño robusto, pero de fácil transportación. Un motor de gran rendimiento, diseñado para trasladarlo a cualquier parte. Cuenta con el tanque de combustible incorporado lo cual facilita su instalación. Es un modelo con características prácticas y para el manejo en aguas pocos profundas.",
        stock: 3,
        urlImg: "https://www.yamaha-motor.com.ar/images/productos/b3ada71c07cbb6cebc5fd2001c83b55f_md.webp",
        price: "150000"
    },

    {
        id: "4",
        name: "Pampa 960",
        category: "embarcacion",
        description: "Aparejo Sloop Al Tope, 5 Molinetes, Enrollador, Maniobra Spi, Fondeo, 2 Bomba De Achique, Chubasquera, Escalera En Popa",
        stock: 2,
        urlImg: "https://campoembarcaciones.com/wp-content/uploads/2023/10/Pampa-960-1.jpg",
        price: "Usd 86000"
    },

    {
        id: "5",
        name: "Plenamar 27",
        category: "embarcacion",
        description: "Aparejo Sloop Al Tope, 4 Molinetes (2 Con Self Nuevos Profull), Enrollador, Vang Rigido, Maniobra Spi, Fondeo, Malacate Electrico, Bomba De Achique, 1/2 Carpa, Cubre Mayor, Chubasquera, Bimini, Escalera En Popa, Asientos En Popa",
        stock: 3,
        urlImg: "https://campoembarcaciones.com/wp-content/uploads/2023/05/Plenamar-27-1.jpg",
        price: "Usd 41000"
    },


    {
        id: "6",
        name: "F&C 37",
        category: "embarcacion",
        description: "Aparejo Sloop Al Tope, Mastil Selden Doble Cruceta Con Enrollador, Timon De Rueda, Doble Timonera, Malacate, 5 Molinetes, Enrollador Furlex, Maniobra Spi, 2 Fondeos, Bomba De Achique, Carpa, Escalera En Popa, Bimini",
        stock: 1,
        urlImg: "https://campoembarcaciones.com/wp-content/uploads/2022/03/FyC-37-1-1.jpg",
        price: "Usd 100000"
    },
];



export const getProducts = ()=>{

    return new Promise((resolve, reject) => {
        if (products.length>0) { //Verificamos si hay productos 
            setTimeout(()=>{
                resolve(products)

            },1000)
            
        } else {
            reject("No hay productos")
        }
    })

};


export const getProduct = (id)=>{

    return new Promise((resolve, reject) => {

        const product = products.find(product => product.id === id);
        setTimeout(()=> {
            if(!product) {
                reject ("No se encontró el producto")
            } else {
                resolve(product);
            }
        },1000)
    });

};
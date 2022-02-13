
const onAdd = (cant,stockItem) => {
    return new Promise((resolve,reject) => {
        if (stockItem===0||stockItem==="0") {
            resolve(alert("No hay STOCK!"));
        } else {
            reject(alert("Se agregarán "+cant+" unidades al Carrito"));
        }
    })
}

export default onAdd;
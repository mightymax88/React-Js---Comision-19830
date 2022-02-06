
const onAdd = (cant,stockItem) => {
    return new Promise((resolve,reject) => {
        if (stockItem===0) {
            alert("No hay STOCK!")
        } else {
            alert("Compró "+cant)
        }
    })
}

export default onAdd;
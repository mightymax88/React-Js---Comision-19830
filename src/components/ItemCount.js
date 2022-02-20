import React,{useEffect, useState} from 'react';

function ItemCount({stock,initial,onAdd,bandera}){
    bandera=bandera+1;
    const [stockItem,setStock] = useState([]);
    const [cantItem, setCantItem] = useState([]);
    let textButton = "Agregar al carrito";
    if(parseInt(stock)===0){
        textButton = "Sin stock";
    }
    const restoCant = () => {
        if(cantItem>=2){
            setCantItem(cantItem-1);
        }
    }
    const sumoCant = () => {
        if(cantItem<stockItem){
            setCantItem(cantItem+1);
        }
    }
    //componentDidUpdate
    useEffect(()=> {
        setStock(stock)
        setCantItem(parseInt((stock==="0"||stock===0)?"0":initial))
    },[stock,initial]);
    //Return
    return(
        <>
        {
        <div>
            <div id="cosaCompra">
                <p id="pitem"> 
                        <input className="ip" type="button" value="-" onClick={() => restoCant()}/>
                        <input className="ip" id="txCart" type="number" value={cantItem}/>
                        <input className="ip" type="button" value="+" onClick={() => sumoCant()}/>
                </p> 
            </div>
            <div>
                <input className="ip" type="button" value={textButton} onClick={() => onAdd(cantItem,stockItem)}/>
            </div>
        </div>
        }
        </>
    )
}

export default ItemCount;
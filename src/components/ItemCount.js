import React,{useEffect, useState} from 'react';
import onAdd from './onAdd';

function ItemCount({stock,initial}){
    const [stockItem] = useState(parseInt(stock));
    const [cantItem, setCantItem] = useState(parseInt(stockItem===0?"0":initial));
    let textButton = "Agregar al carrito";
    if(stockItem===0){
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
    //componentDidMount - Para uso futuro
    useEffect(()=> {
    },[]);
    //componentDidUpdate - Para uso futuro
    useEffect(() => {
    },[cantItem]);
    //Return
    return(
        <div>
            <div id="cosaCompra">
                <p id="pitem">  <br/><br/>
                        <p>Juego #1</p>
                        <input className="ip" type="button" value="-" onClick={() => restoCant()}/>
                        <input className="ip" id="txCart" type="number" value={cantItem}/>
                        <input className="ip" type="button" value="+" onClick={() => sumoCant()}/>
                </p> 
            </div>
            <div>
                <input className="ip" type="button" value={textButton} onClick={() => onAdd(cantItem,stockItem)}/>
            </div>
        </div>
    )
}

export default ItemCount;
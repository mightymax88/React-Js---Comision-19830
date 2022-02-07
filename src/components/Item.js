//import React,{useEffect, useState} from 'react';
import ItemCount from './ItemCount';
import onAdd from './onAdd';

const Item = (props) => {
    return(
        <div className="juego-container col-3">
            <div className="juego-image">
                <img src={props.thumbnail} alt={props.title} width={"100px"}/>
            </div>
            <div className="juego-info">
                <h4>{props.title}</h4>
                <h5>Precio: ${props.price}</h5>
                <p>Categoría: {props.category}</p>
                <p>{props.description}</p>
                <p>Stock disponible: {parseInt(props.stock)}</p>
                <ItemCount stock={parseInt(props.stock)} initial="1" onAdd={onAdd}/>
            </div>
        </div>
    );
}

export default Item
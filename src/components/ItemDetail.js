//import React,{useEffect, useState} from 'react';
import ItemCount from './ItemCount';
import onAdd from './onAdd';

const ItemDetail = (props) => {
    const games=props.games;
    return(
        <div className="juego-container-detail col-10">
            <div className="row">
                <div className="juego-image col-3">
                    <img src={games.thumbnail} alt={games.title} width={"300px"}/>
                </div>
                <div className="juego-info col-9">
                    <br/>
                    <h2>{games.title}</h2>
                    <br/>
                    <h5>Precio: ${games.price}</h5>
                    <br/>
                    <p>Categoría: {games.category}</p>
                    <p>Descripción: {games.description}</p>
                    <p>Desarrollador: {games.developer}</p>
                    <br/>
                    <p>Stock disponible: {parseInt(games.stock)}</p>
                    <ItemCount stock={games.stock} initial="1" onAdd={onAdd}/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
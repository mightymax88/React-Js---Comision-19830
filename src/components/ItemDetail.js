//import React,{useEffect, useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {useState, useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import cargando from './imagenes/loading-now.gif';
//import GoToCart from './GoToCart';

const ItemDetail = (props) => {
    const games=props.games;
    const [bandera,setBandera] = useState(0);
    const test = useContext(CartContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },2000)
    },[]);

    const onAdd = (cant,stockItem) => {
        return new Promise((resolve,reject) => {
            if (stockItem===0||stockItem==="0") {
                resolve(alert("Lamentablemente, no hay stock"));
            } else {
                reject(
                    alert("Se agregarán "+cant+" unidades al Carrito"),
                );
                setBandera(cant);
                test.addToCart(games,cant);
            }
        })
    }

    return<>
        {
            loading?
                <img alt='logo' src={cargando} width="400" height="300"/>
                :
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
                            {bandera===0
                                ?<ItemCount stock={games.stock} initial="1" onAdd={onAdd} bandera={bandera}/>
                                :<Link to={'/cart'}><button type="button">Finalizar compra</button></Link>
                            }
                        </div>
                    </div>
                </div>
        }
    </>
}

export default ItemDetail;
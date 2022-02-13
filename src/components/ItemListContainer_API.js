import React,{useState,useEffect} from 'react';
import { customFetch } from './customFetch.js';

const {data} = require('./Games.js');

function ItemDetailContainer() {
    // Implementar mock invocando a getItem() y utilizando el resolver then return /*
    // JSX que devuelva un ItemDetail
    const [games, setGames] = useState([]);

    const getItem = () => {
        // Esta función debe retornar la promesa que resuelva con delay
        customFetch(2000,data)
            .then(data => setGames(data))
            .catch(error=>console.log(error))
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=juego_nintendo_switch')
            .then(response => response.json())
            .then(data => setGames(data.results))
            .catch(error=>console.log(error))
    }

    useEffect(() => {
        getItem();
    },[]);
}

export default ItemDetailContainer;
import React,{useState,useEffect} from 'react';
import ItemList from './ItemList';


const data = [
    {
        id: 1,
        title: "Pokemon Legends Arceus",
        price: "12400",
        thumbnail: "https://m.media-amazon.com/images/I/81vaoG0k9CS._AC_SY500_.jpg",
        category: "Aventura, RPG",
        description: "Nuevo videojuego de rol, precuela de Pokémon diamante y perla",
        stock: "5"
    },
    {
        id: 2,
        title: "Mario Odyssey",
        price: "9500",
        thumbnail: "https://m.media-amazon.com/images/I/51NgDXzErYL._SY445_.jpg",
        category: "Aventura",
        description: "Videojuego de plataformas en tres dimensiones para Nintendo Switch.",
        stock: "0"
    },
    {
        id: 3,
        title: "Mario Kart 8 Deluxe",
        price: "10100",
        thumbnail: "https://m.media-amazon.com/images/I/81iJG2js5-S._SY445_.jpg",
        category: "Carreras",
        description: "Undécima entrega de la serie Mario Kart, octava en consolas de Nintendo.",
        stock: "2"
    }
]  

let is_ok = true;

function ItemListContainer(){
    const saludo="Bienvenido a nuestro sitio web!";
    const [games, setGames] = useState([]);

    const customFetch = (data) => {
        return new Promise ((resolve, reject) => {
            if(is_ok){
            resolve(data)
            } else {
            reject('KO')
            }
        });
    };

    //componentDidMount
    useEffect(() => {
        setTimeout(() => {
            function getGames(){
                customFetch(data)
                    .then (data => setGames(data))
                    .catch (error => alert ("Error en datos:", error))
            }
            getGames();
        },2000);
    },[]);

    return(
        <div>
            <div className='tituloILC'>
                <h2>{saludo}</h2>
            </div>
            <div className='cuerpoILC'>
                <ItemList games={games}/>
            </div>
        </div>
    );
}

export default ItemListContainer;
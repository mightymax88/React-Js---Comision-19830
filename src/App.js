import './App.css';
import React,{useState} from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer.js';

let is_ok = true;

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

function App() {
  const [games, setGames] = useState([]);

  const customFetch = (timeout, data) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        if(is_ok){
          resolve(data)
        } else {
          reject('KO')
        }
      }, timeout);
    });
  };

  customFetch(2000,data)
  .then (data => setGames(data))
  .catch (error => alert ("Error en datos:", error))

  return (
    <div className="App">
      {/* Incorporación de navbar dentro dle componente NavBAR.js */}
      <NavBar />
      <h1>Sitio de compra juegos Nintendo Switch en Argentina</h1>
      <ItemListContainer saludo="Bienvenido a nuestro sitio web!" games={games}/>
      <Footer />
    </div>
  );
}

export default App;

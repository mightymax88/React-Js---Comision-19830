import './App.css';
import React,{useState} from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount';
import Item from './components/Item';
import ItemList from './components/ItemList';

let is_ok = true;

const data = [
  {
    id: 1,
    title: "Pokemon Legends Arceus",
    price: "100",
    thumbnail: "https://m.media-amazon.com/images/I/81vaoG0k9CS._AC_SY500_.jpg",
    category: "Aventura, RPG",
    description: "Nuevo juego de Pokemon",
    stock: "5"
  },
  {
    id: 2,
    title: "Mario Odyssey",
    price: "89",
    thumbnail: "https://m.media-amazon.com/images/I/51NgDXzErYL._SY445_.jpg",
    category: "Aventura, RPG",
    description: "Nuevo juego de Mario",
    stock: "0"
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
      <ItemListContainer saludo="Bienvenido a nuestro sitio web!"/>
      {games.map(item=>
        <Item
          key={item.id}
          title={item.title}
          price={item.price}
          thumbnail={item.thumbnail}
          category={item.category}
          description={item.description}
          stock={item.stock}
        />
      )}
      <br/>
    </div>
  );
}

export default App;

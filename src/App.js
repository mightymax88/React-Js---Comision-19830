import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount';
import Juegos from './components/Juegos';

const data = [
  {
    id: 1,
    title: "Pokemon Legends Arceus",
    price: "100",
    thumbnail: "https://m.media-amazon.com/images/I/81vaoG0k9CS._AC_SY500_.jpg",
    category: "Aventura, RPG",
    description: "Nuevo juego de Pokemon"
  },
  {
    id: 2,
    title: "Mario Odyssey",
    price: "89",
    thumbnail: "https://m.media-amazon.com/images/I/51NgDXzErYL._SY445_.jpg",
    category: "Aventura, RPG",
    description: "Nuevo juego de Mario"
  }
]

function App() {
  return (
    <div className="App">
      {/* Incorporación de navbar dentro dle componente NavBAR.js */}
      <NavBar />
      <h1>Sitio de compra juegos Nintendo Switch en Argentina</h1>
      <ItemListContainer saludo="Bienvenido a nuestro sitio web!"/>
      {
        data.map(item=>
          <Juegos
            key={item.id}
            title={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
            category={item.category}
            description={item.description}
          />
        )
      }
      <ItemCount stock="5" initial="1"/>
      <br/>
    </div>
  );
}

export default App;

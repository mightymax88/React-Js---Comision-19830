import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      {/* Incorporación de navbar dentro dle componente NavBAR.js */}
      <NavBar />
      <h1>Sitio de compra juegos Nintendo Switch en Argentina</h1>
      <ItemListContainer saludo="Bienvenido a nuestro sitio web!"/>
    </div>
  );
}

export default App;

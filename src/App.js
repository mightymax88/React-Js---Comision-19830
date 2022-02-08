import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      {/* Incorporación de navbar dentro dle componente NavBAR.js */}
      <NavBar />
      <h1>Sitio de compra juegos Nintendo Switch en Argentina</h1>
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;

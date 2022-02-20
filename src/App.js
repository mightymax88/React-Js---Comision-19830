import './App.css';
import React from 'react';
//Importo módulo para Routing y Navegación
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <h1>Sitio de compra juegos Nintendo Switch en Argentina</h1>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idSaga' element={<ItemListContainer/>}/>
            <Route path='/item/:idGame' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

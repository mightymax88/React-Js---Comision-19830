import React from 'react';
import cartIcon from './imagenes/cart.png';
import { Link } from 'react-router-dom';

function CartWidget (){
    return (
        <Link to={'/cart'}><button type="button"><img src={cartIcon} alt="carro" width="35" height="35"/></button></Link>
    );
}

export default CartWidget;
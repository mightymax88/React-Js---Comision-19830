import React from 'react';
import cartIcon from './imagenes/cart.png';

function CartWidget (){
    return (
        <button type="button"><img src={cartIcon} alt="carro" width="35" height="35"/></button>
    );
}

export default CartWidget;
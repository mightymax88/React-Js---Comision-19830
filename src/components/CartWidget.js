import React, { useContext } from 'react';
import cartIcon from './imagenes/carro_mario.png';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function CartWidget (){
    const test = useContext(CartContext);
    let sumaTotal = parseInt(0);

    // Sumo la cantidad de items
    for (let x in test.cartList){
        sumaTotal = sumaTotal + test.cartList[x].qty;
    }

    return (
        <span>
            {
                test.cartList.length>0?
                    <div className='container-fluid cartFlow'>
                        <div className='row align-items-center'>
                            <div className='col cartIcon'>
                                <Link to={'/cart'}><img src={cartIcon} alt="carro" width="40" height="40"/></Link>
                            </div>
                            <div className='col cartNumber'>
                                <p>({sumaTotal})</p>
                            </div>
                        </div>
                    </div>
                :
                <br></br>
            }
        </span>
        );
}

export default CartWidget;
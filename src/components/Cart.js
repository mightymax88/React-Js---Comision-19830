import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () =>{
    const test = useContext(CartContext);

    return (
        <div className='row'>
            <div className='cabezalCarrito'>
                <h2>Carro de compras:</h2>
                <input className="ip" type="button" value={"Limpiar carro"} onClick={() => test.clear()}/>
                <br></br>
            </div>
            <div>
                {
                    test.cartList.map(item =>(
                        <span>
                            <div className='container-flow row cartItem'>
                                <div className='col-2'>
                                    <img src={item.image} alt={item.name} width={"50px"}/>
                                </div>
                                <div className='col-4'>
                                    <h5>Producto: </h5> {item.name}
                                    <br></br>
                                    <input className="ip" type="button" value={"Remover"} onClick={() => 
                                            test.removeItem(item.id)
                                                .then(()=>test.updateState())
                                        }/>
                                </div>
                                <div className='col-2'>
                                    <h5>Cantidad: </h5> {item.qty}
                                </div>
                                <div className='col-2'>
                                    <h5>Precio Unitario:</h5> ${item.price}
                                </div>
                                <div className='col-2'>
                                    <h5>Precio total: </h5> ${item.total}
                                </div>
                            </div>
                        </span>
                    ))
                }
            </div>
        </div>
    );
}

export default Cart;
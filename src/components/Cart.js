import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import emptyCart from './imagenes/mario-cart.jpeg';
import { Link } from 'react-router-dom';
import {serverTimestamp, setDoc, doc, collection, increment, updateDoc} from "firebase/firestore";
import db from '../utils/firebaseConfig';

const Cart = () =>{
    const test = useContext(CartContext);

    const createOrder = () => {
        let order = {
            buyer: {
                email: "maxi@gmail.com",
                name: "Maxi",
                phone: "1122334455"
            },
            date: serverTimestamp(),
            items: test.cartList.map((item) => {return {
                id: item.id,
                price: item.price,
                title: item.name,
                qty: item.qty
            }}),
            total: test.totalCart
        }

        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
    
        createOrderInFirestore()
            .then((result) => {
                alert("Su orden ha sido procesada (Nro.): " + result.id);
                test.cartList.map(async(item) =>{
                    const itemRef = doc(db,'games',item.id.toString());
                    await updateDoc(itemRef, {
                        stock: increment(-item.qty),
                    });
                });
                test.clear();
            })
            .catch((error) => console.log(error))
    }
    
    return (
        <div className='row'>
            <div className='cabezalCarrito'>
                <h2>Carro de compras:</h2>
                {test.cartList.length>0? <input className="ip" type="button" value={"Limpiar carro"} onClick={() => test.clear()}/>:<br></br>}
            </div>
            <div>
                {
                    test.cartList.length>0?
                        test.cartList.map(item =>(
                            <>
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
                            </>
                        ))
                    :
                        <div className='row justify-content-md-center'>
                            <div className='col-4 align-self-center carritoVacio'>
                                <h3>El carrito está vacío</h3>
                                <Link to={'/'}><button type="button" class="btn btn-light">Volver al listado</button></Link>
                                <img alt='emptyCart' src={emptyCart} width="400" height="300"/>  
                            </div>
                        </div>
                }
            </div>
            <div className='row cartLineaTotal'>
                {
                    test.cartList.length>0?
                        <>
                            <div className='col-8'></div>
                            <div className='col-2 cartTotal'>
                                <h3>Total:</h3>
                            </div>
                            <div className='col-2 cartTotalPrice'>
                                <h3>${test.totalCart}</h3>
                                <input className="ip" type="button" value={"Confirmar compra"} onClick={() => createOrder()}/>
                            </div>
                        </>
                        :
                            <p/>
                }
            </div>
        </div>
    );
}

export default Cart;
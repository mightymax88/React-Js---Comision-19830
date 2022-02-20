import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item,cant) => {
        let detectoEnCart = 0;

        for (let x in cartList){
            if (cartList[x].id === item.id){
                cartList[x].qty=cartList[x].qty+cant;
                cartList[x].total=cartList[x].qty*cartList[x].price;
                detectoEnCart = 1;
            }
        }
        if (detectoEnCart===0){
            setCartList([
                ...cartList,   //spread operator - "antes de agregarme el nuevo objeto, dejame lo que existe"
                {
                    key: item.id,
                    id: item.id,
                    name: item.title,
                    image: item.thumbnail,
                    price: item.price,
                    qty: cant,
                    total: (parseInt(item.price)*parseInt(cant))
                }]
            );
        }
    }

    //Método anterior que no funcionaba por no cambiar la lista mediante set
    //----------------------------------------------------------------------
    // const removeItem = (id) => {
    //     for (let x in cartList){
    //         if (cartList[x].id === id){
    //             cartList.splice(x,1);
    //         }
    //     }
    //     setCartList(cartList);
    // }
    //----------------------------------------------------------------------

    const removeItem = (id) => {
        let algo=[];
        for (let x in cartList){
            if (cartList[x].id !== id){
                algo.push(cartList[x]);
            }
        }
        setCartList(algo);
    }

    const clear = () => {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    const addToCart = (item,cant) => {
        let detectoEnCart = 0;
        let sumaTotal = parseInt(0);
        for (let x in cartList){
            if (cartList[x].id === item.id){
                cartList[x].qty=cartList[x].qty+cant;
                cartList[x].total=cartList[x].qty*cartList[x].price;
                detectoEnCart = 1;
            }
            sumaTotal = parseInt(sumaTotal) + parseInt(cartList[x].total);
            setTotalCart(sumaTotal);
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
            sumaTotal = parseInt(sumaTotal) + (parseInt(item.price)*parseInt(cant));
            setTotalCart(sumaTotal);
        }
    }

    const removeItem = (id) => {
        let algo=[];
        let sumaTotal=0;
        for (let x in cartList){
            if (cartList[x].id !== id){
                algo.push(cartList[x]);
                sumaTotal = parseInt(sumaTotal) + parseInt(cartList[x].total);
            }
        }
        setTotalCart(sumaTotal);
        setCartList(algo);
    }

    const clear = () => {
        setCartList([]);
        setTotalCart(0);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, clear, totalCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
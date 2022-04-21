import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext(); /* exportamos en el mismo archivo que el de la logica global */

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    

    const removeItem = (id) => {
        const result = cartList.filter(producto => producto.key !== id); // filtramos a lo que de falso con la condicion
        setCartList(result);
    }
    
    const isInCart = (id) => {
        return cartList.some(item => id === item.key);
    }

    const clear = () => {
        setCartList([]);
    }

    const addToCart = (item) => {
        setCartList([...cartList, item]);
    }



    return (
        <CartContext.Provider value={{ cartList, addToCart, removeItem, isInCart, clear }}> {/* Cualquiera de estos children tendra acceso a 'value'*/}
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
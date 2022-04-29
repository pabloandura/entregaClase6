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

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image[0],
                    nameItem: item.name,
                    costItem: item.cost,
                    qtyItem: qty
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty;
            setCartList([
                ...cartList
            ]);
        }
    }

    const calcTotalPerItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].cost * cartList[index].sales
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.id));
        return totalPerItem;
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.sales);
                return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue),0);
    }


    return (
        <CartContext.Provider value={{ 
            cartList, 
            addToCart, 
            removeItem, 
            isInCart, 
            clear,
            calcTotalPerItem,
            calcSubTotal,
            calcItemsQty
            }}> {/* Cualquiera de estos children tendra acceso a 'value'*/}
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
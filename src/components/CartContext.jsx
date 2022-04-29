import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext(); /* exportamos en el mismo archivo que el de la logica global */

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    

    const removeItem = (id) => {
        const result = cartList.filter(producto => <producto className="id"></producto> !== id); // filtramos a lo que de falso con la condicion
        setCartList(result);
    }
    
    const isInCart = (id) => {
        return cartList.some(item => id === item.id);
    }

    const clear = () => {
        setCartList([]);
    }

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.id === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    image: item.image,
                    name: item.name,
                    cost: item.cost,
                    sales: qty,
                    key: item.key
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
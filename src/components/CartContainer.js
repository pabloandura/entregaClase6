import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {Button, ButtonGroup} from '@mui/material'
import CartItem from './CartItem'
import './CartContainer.css'


const CartContainer = () => {
    const cartItems = useContext(CartContext);
    console.log(cartItems.cartList)
    const pago = () => {
        alert('En construccion');
    }

    return (
        <>
            <div className="contenedor">
                <h3>
                    Carrito
                </h3>

                {
                    cartItems.cartList.length > 0
                        ? cartItems.cartList.map(item => 
                        <CartItem 
                            name={item.name} 
                            key={item.key} 
                            img={item.image}
                            cant={item.sales}
                            removeItem={cartItems.removeItem} 
                            idRem={item.key}
                        />
                        )
                        : <p>No tienes nada en el carrito, asesorate con <Link to='/contacto'>nosotros</Link>.</p>
                }
                <ButtonGroup className="botonesCartContainer" variant="contained" aria-label="outlined primary button group">
                    <Button onClick={cartItems.clear}>Limpiar Carrito</Button>
                    <Button onClick={pago}>Pagar</Button>
                </ButtonGroup>
            </div>
        </>

    )
}


export default CartContainer;
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {Button, Grid} from '@mui/material'
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../usefuls/firebaseConfig';
import CartItem from './CartItem'
import './CartContainer.css'


const CartContainer = () => {
    const cartItems = useContext(CartContext);
    console.log(cartItems.cartList)
    
    const checkout = () => {
        let order = {
            buyer: {
                name: 'Leo Messi',
                email: 'leo@messi.com',
                phone: '123456789'
            },
            date: '04/29/22'

        }
        console.log(order);
    }

    return (
        <>
            <Grid container spacing={2}>
            <Grid item xs={12} sx={{'textAlign':'center'}}>
                <h2>
                    Carrito
                </h2>
            </Grid>

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
                            cost={item.cost}
                            id={item.id}
                        />
                        )
                        : <p className={'mensajes'}>No tienes nada en el carrito, asesorate con <Link to='/contacto'>nosotros</Link> o busca algo que comprar
                        en <Link to={'/'}>la tienda</Link>.</p>
                }
            </Grid>
            {
                cartItems.cartList.length > 0
                    ? 
                    <Grid container spacing={10}>
                        <Grid item  display='flex' justifyContent="flex-end" xs={6}>
                            <Button variant="outlined" onClick={cartItems.clear}>Limpiar Carrito</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <i>Total a pagar: </i> U$S {
                                cartItems.calcSubTotal().reduce((previous,current) => previous + current)
                            }
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined" color='success' onClick={checkout}>Terminar mi compra</Button>
                        </Grid>
                    </Grid>
                    : <p style={{backgroundColor:'rgb(240, 240, 240)'}}>Gracias por visitarnos!</p>
            }
        </>

    )
}


export default CartContainer;
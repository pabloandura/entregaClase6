import React from 'react';
import FormDialog from './FormDialog';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { Button, Grid } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../usefuls/firebaseConfig';
import CartItem from './CartItem'
import './CartContainer.css'


const CartContainer = () => {
    const cartItems = useContext(CartContext);
    
    const checkout = (name,email,phone) => {
        // reducimos el stock de los items seleccionados
        cartItems.cartList.forEach(async (item) => {
            const itemRef = doc(db,'products',item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.sales)
            });
        });

        let order = {
            buyer: {
                nameFull: {name},
                emailAddress: {email},
                phoneNumber: {phone}
            },
            item: cartItems.cartList.map( item => ({
                id: item.id,
                title: item.name,
                price: item.cost,
                qty: item.sales
            })),
            date: serverTimestamp(),
            total: cartItems.calcSubTotal().reduce((previous,current) => previous + current),


        }
        const orderCreation = (string) => toast.success(string);
        const createOrderInFirestore = async () => {
            // add a new document with a generated ID
            const newOrderRef = doc(collection(db,"orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        createOrderInFirestore()
            .then( result => orderCreation(" Your order has been created. Please take note of your order's id. \n\n\n " + result.id + "\n\n"))
            .catch( err => console.log(err) )

        // limpiamos el carrito porque ya se compraran estos items
        cartItems.clear();
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
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
                            cartDeletion={item}
                        />
                        )
                        : <p className={'mensajes'}>No tienes nada en el carrito, asesorate con <Link to='/contacto'>nosotros</Link> o busca algo que comprar
                        en <Link to={'/'}>la tienda</Link>.</p>
                }
            </Grid>
            {
                cartItems.cartList.length > 0
                    ? 
                    <Grid container spacing={10} sx={{
                        marginTop:'15px'
                        }}>
                        <Grid item  display='flex' justifyContent="flex-end" xs={6}>
                            <Button variant="outlined" onClick={cartItems.clear}>Limpiar Carrito</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <i>Total a pagar: </i> U$S {
                                cartItems.calcSubTotal().reduce((previous,current) => previous + current)
                            }
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined" color='success' onClick={handleClickOpen}>Terminar mi compra</Button>
                        </Grid>
                    </Grid>
                    : <p style={{fontSize:'35px', backgroundColor:'rgb(240, 240, 240)'}}>Gracias por visitarnos!</p>
            }
            <ToastContainer autoClose={false} />
            <FormDialog checkout={checkout} handleClose={handleClose} open={open}/>
        </>

    )
}

export default CartContainer;
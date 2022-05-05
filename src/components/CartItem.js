import { Button, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartItem.css';

const CartItem = (props) => {
    const cartItems = useContext(CartContext);
    return(
        <>
            <Grid item xs={4} className='container'>    
                <img 
                    className='imgItem' 
                    alt={props.name} 
                    src={props.img}
                />
            </Grid>

            <Grid item xs={8} className='info'>
                <h1>{props.name}</h1>
                
                <h3 className='cant'>Cantidad: {props.cant}</h3>
                
                &emsp;

                <Button onClick={() => {
                    const obj = props.cartDeletion;
                    props.removeItem(obj)
                }}>
                    Quitar Producto
                </Button>

                <Typography>Unidad: U$S {props.cost} | Subtotal: U$S {cartItems.calcTotalPerItem(props.id)}</Typography>
            </Grid>
        </>
        )
}

export default CartItem;
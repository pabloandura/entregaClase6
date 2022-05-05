import { Grid,Button } from "@mui/material"
import { useState, useContext } from "react";
import {Link} from 'react-router-dom'
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from 'react-toastify';
import ItemCount from './ItemCount'
import 'react-toastify/dist/ReactToastify.css';
import './ItemDetail.css'


const ItemDetail = ({item}) => {
    // contador de items a comprar
    const [itemCount, setItemCount] = useState(0);
    const ContextItems = useContext(CartContext);
    //toastify
    //funcion de carrito
    const onAdd = (qty) => {
        const notify = () => toast(`Has introducido ${qty} "${item.name}" en el carrito.`);
        notify();
        setItemCount(qty);
        ContextItems.addToCart(item, qty);
    }

    return(
        <>
        {
        item.id
        ? 
        <div>
            <h2>{item.name}</h2>
            <Grid container className='detailPage'>
                <Grid item xs={4}>
                    <img src={item.imageDetail} alt='detalleProducto'/>
                    <h3>Stock Actual: {item.stock}</h3>
                    <h4>Precio unitario: U$S {item.cost}</h4>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: 'none'}}><Button variant='contained' color='secondary'>Ir al carrito</Button></Link>
                    }
                </Grid>
                <Grid className='margen' item xs={8}>
                    <h4>{item.description}</h4>
                </Grid>
            </Grid>
            <ToastContainer />
        </div>
        : <p>Cargando...</p>
        }
        </>
    )
}

export default ItemDetail
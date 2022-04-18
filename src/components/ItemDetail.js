import { Grid,Button,ButtonGroup } from "@mui/material"
import { useState } from "react";
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ({item}) => {

    // contador de items a comprar
    const [itemCount, setItemCount] = useState(0);

    //funcion de carrito
    const onAdd = (cant) => {
        alert(`Pusiste ${cant} ${item.name}s en el carrito`)
        setItemCount(cant);
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
        </div>
        : <p>Cargando...</p>
        }
        </>
    )
}

export default ItemDetail
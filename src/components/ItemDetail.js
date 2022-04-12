import { Grid,Button,ButtonGroup } from "@mui/material"
import './ItemDetail.css'
import { useState } from "react";

const ItemDetail = ({item}) => {

    //declaro un estado
    const [nro,setNro] = useState(1); // ES UN HOOK: quiero un estado valoraciones y es convencion que para cambiarlo debe ser setNOMBRE DE VARIABLE

    //logica calculo de precio total
    let costoTotal = nro*parseInt(item.cost);

    //funcion de carrito
    const addCart = (cant) => {
        cant = nro;
        alert(`Pusiste ${cant} ${item.name}s en el carrito`)
    }

    const reduce = () => {
        if(nro>1)
            setNro(nro-1);

    }

    const increase = () => {
        if(nro<item.stock)
            setNro(nro+1);
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
                    <h4>Precio total: U$S {costoTotal}</h4>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="contained" onClick={reduce}>-</Button>
                        <Button variant="contained">{nro}</Button>
                        <Button variant="contained" onClick={increase}>+</Button>
                    </ButtonGroup>
                    &emsp;
                    <Button variant='contained' onClick={addCart}>Agregar al carrito</Button>
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
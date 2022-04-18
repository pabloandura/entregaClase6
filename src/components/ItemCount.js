import {Button, ButtonGroup} from '@mui/material'
import { useState } from 'react'

const ItemCount = ({initial,stock,onAdd}) => {
    // estado local
    const [nroActual,setNroActual] = useState(initial);

    // funciones de reduccion y aumento del estado local
    const reduce = () => {
        if(nroActual>1)
            setNroActual(nroActual-1);
    }
    const increase = () => {
        if(nroActual<stock)
            setNroActual(nroActual+1);
    }

    // llamada a la funcion que se paso desde el parent.
    const addCart = () => {
        onAdd(nroActual);
    }

    return(
        <ButtonGroup aria-label="Basic example">
            <Button variant="contained" onClick={reduce}>-</Button>
            <Button variant="contained">{nroActual}</Button>
            <Button variant="contained" onClick={increase}>+</Button>
            &emsp;
            <Button variant='contained' onClick={addCart}>Agregar al Carrito</Button>
        </ButtonGroup>
    )
}

export default ItemCount;
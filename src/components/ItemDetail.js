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
        item.name
        ? 
        <div>
            <h2>{item.name}</h2>
            <Grid container className='detailPage'>
                <Grid item xs={4}>
                    <img src={item.imageDetail}/>
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
                    <p>{item.description}</p>
                    <div>
                    <h3>Características</h3>
                        <ul>  
                            <li>Compresión clásica de "knee" con especificaciones y rendimiento modernos</li>
                            <li>La distorsión analógica programable calienta las implacables grabaciones digitales</li>
                            <li>Tres modos de audio: programable por el usuario, distorsión armónica de estilo vintage</li>
                            <li>Limpia y Distorsiona 2 modos: como un tubo, armónicos de 2º orden</li>
                            <li>Distorsión 3 modos: distorsión dominada por armónicos de 3er orden (similar a la cinta)</li>
                            <li>Luces indicadoras de distorsión: 1% LED, LED "Redline" (3%); el recorte duro comienza unos pocos dB después de la "Redline".</li>
                            <li>EQ de cadena lateral avanzada: el énfasis de la banda media-alta domina las señales duras y nerviosas; el paso alto mantiene las frecuencias bajas de suma/diferencia de las frecuencias superiores del material de la fuente de bombeo.</li>
                            <li>Ocho curvas únicas, comenzando con 1:1 con armónicos de bajo orden pero sin compresión</li>
                            <li>El ajuste "Nuke" es una curva límite brick-wall</li>
                            <li>La configuración 10:1 emplea un circuito detector separado para emular los clásicos compresores "light-controlled"... Circuitos discretos e integrados para la mejor combinación de velocidad/linealidad con repetibilidad</li>
                            <li>Componentes de larga duración seleccionados y probados a mano, incluyendo película metálica y resistencias Roederstein en la ruta de audio.</li>
                            <li>Grandes perillas con numeración de alta resolución para facilitar la lectura y la repetición de los ajustes.</li>
                            <li>Nivel de salida bloqueado y calibrado para configuraciones confiables y rápidas.</li>
                            <li>Funcionamiento conmutable de 115/230 voltios con un fusible adicional almacenado en el interior de la unidad</li>
                            <li>La fuente de alimentación sobre-diseñada funciona fría, permite un gabinete sellado sin ventilaciones de calor</li>
                            <li>Verdadero bypass para comparaciones A/B seguras</li>
                            <li>XLR y E/S de 1/4"; conexión estéreo</li>
                            <li>Conectado a mano y calibrado en EE.UU.</li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </div>
        : <p>Cargando...</p>
        }
        </>
    )
}

export default ItemDetail
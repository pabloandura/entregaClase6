import getData from '../usefuls/getData';
import products from '../usefuls/products'
import { useEffect,useState } from "react";
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [detalle,setDetalle] = useState({});
    
    useEffect( () => {
      getData(2000, products[2])
        .then( result => setDetalle(result) )
        .catch( err => console.log(err) )
      },[])

    return(
        <ItemDetail item={detalle}/>
    )
}

export default ItemDetailContainer
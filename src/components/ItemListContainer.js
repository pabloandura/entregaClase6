import customFetch from '../usefuls/customFetch'
import { useEffect, useState } from 'react'
import products from '../usefuls/products'
import ItemList from './ItemList'
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [datos, setDatos] = useState(0); // HOOK

  useEffect(() => {
    customFetch(2000, products)
      .then(result => setDatos(result))
      .catch(err => console.log(err))
  }, []);

  
  return(
    <div id='contenedor'>  
      <ItemList data={datos}/>
    </div>
    )
}
export default ItemListContainer
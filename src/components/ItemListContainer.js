import getData from '../usefuls/getData';
import { useEffect, useState} from 'react';
import products from '../usefuls/products';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [datos, setDatos] = useState({}); // HOOK estado para los productos
  const {idCategory} = useParams(); // HOOK parametros de navegacion

  useEffect(() => {
    if(idCategory === undefined){
      getData(2000, products)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
      console.log(idCategory) // 1:25
    } else { // condicion para la categoria de items a mostrar
      getData(2000, products.filter(item => item.productCategory === parseInt(idCategory)))
      .then(result => setDatos(result))
      .catch(err => console.log(err))
    }
  }, [idCategory]);

  
  return(
    <div id='contenedor'>  
      <ItemList data={datos}/>
    </div>
    )
}
export default ItemListContainer
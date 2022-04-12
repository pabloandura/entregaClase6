import getData from '../usefuls/getData';
import products from '../usefuls/products'
import { useEffect,useState } from "react";
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [detail,setDetail] = useState([]);
    const {idDetail} = useParams(); // HOOK parametros de navegacion

    useEffect( () => {
      if(idDetail === undefined){
        getData(2000, products)
          .then(result => setDetail(result))
          .catch(err => console.log(err))
      } else { // condicion para la categoria de items a mostrar
        getData(2000, products.find(item => item.id === parseInt(idDetail)))
          .then(result => setDetail(result))
          .catch(err => console.log(err))
      }
    }, [idDetail]);

    return(
        <ItemDetail item={detail}/>
    )
}

export default ItemDetailContainer
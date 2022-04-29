import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import db from '../usefuls/firebaseConfig'
import './ItemListContainer.css';
import { firestoreFetch } from '../usefuls/firestoreFetch';

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  //componentDidUpdate
  useEffect(() => {
      firestoreFetch(idCategory)
          .then(result => setDatos(result))
          .catch(err => console.log(err));
  }, [idCategory]);

  //componentWillUnmount
  useEffect(() => {
      return (() => {
          setDatos([]);
      })
  }, []);

  
  return(
    <div id='contenedor'>  
      <ItemList data={datos}/>
    </div>
    )
}
export default ItemListContainer
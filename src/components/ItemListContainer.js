import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import db from '../usefuls/firebaseConfig'
import './ItemListContainer.css';


const ItemListContainer = () => {
  const [datos, setDatos] = useState({}); // HOOK estado para los productos
  const {idCategory} = useParams(); // HOOK parametros de navegacion

  useEffect(() => {
    const fetchFromFirestore = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const dataFromFirestore = querySnapshot.docs.map( (doc) => ({
        id: doc.id,
        ...doc.data()
      })); // por cada documento en el storage se pondra en el estado
      return dataFromFirestore;
    }
    fetchFromFirestore()
      .fetch( result => setDatos(result) )
      .catch(err => console.log(err))
  }, [datos]);
  useEffect(()=>{
    return ( () => {
      setDatos( [] );
    })
  })

  
  return(
    <div id='contenedor'>  
      <ItemList data={datos}/>
    </div>
    )
}
export default ItemListContainer
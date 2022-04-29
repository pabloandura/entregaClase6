import { useEffect,useState } from "react";
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import db from "../usefuls/firebaseConfig";
import data from "../usefuls/products";


const ItemDetailContainer = () => {


    const [detail,setDetail] = useState([]);
    const {idDetail} = useParams(); // HOOK parametros de navegacion
    const ref = doc(db,'products','8tWPiRxlk2L4BSzvuqg7')

    useEffect(() => {
      const fetchFromFirestore = async () => {
        const querySnapshot = await getDoc(ref);
        const dataFromFirestore = [...data()]; // por cada documento en el storage se pondra en el estado
        return dataFromFirestore;
      }
      fetchFromFirestore()
        .fetch( result => setDetail(result) )
        .catch(err => console.log(err))
    }, [idDetail]);
    useEffect(()=>{
      return ( () => {
        setDetail( [] );
      })
    })

    return(
        <ItemDetail item={detail}/>
    )
}

export default ItemDetailContainer
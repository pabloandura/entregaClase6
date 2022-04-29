import { useEffect,useState } from "react";
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../usefuls/firestoreFetch';


const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { idDetail } = useParams();

  useEffect(() => {
      firestoreFetch(idDetail)
          .then(result => setDetail(result))
          .catch(err => console.log(err))
  }, []);
  

    return(
        <ItemDetail item={detail}/>
    )
}

export default ItemDetailContainer
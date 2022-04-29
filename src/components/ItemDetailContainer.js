import { useEffect,useState } from "react";
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { firestoreFetchOne } from '../usefuls/firestoreFetch';


const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { idDetail } = useParams();

  useEffect(() => {
      firestoreFetchOne(idDetail)
          .then(result => setDetail(result))
          .catch(err => console.log(err))
  }, []);
  

    return(
        <ItemDetail item={detail}/>
    )
}

export default ItemDetailContainer
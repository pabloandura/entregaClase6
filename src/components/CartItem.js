import { Button } from '@mui/material';
import './CartItem.css';

const CartItem = (props) => {
    return(
        <div className='container'>    
            <img 
                className='imgItem' 
                alt={props.name} 
                src={props.img}
            />
            <div className='info'>
                <h1>{props.name}</h1>
                <h3 className='cant'>Cantidad: {props.cant}</h3>
                    <Button onClick={() => props.removeItem(props.idRem)}>Remove Item</Button>
            </div>
        </div>

        )
}

export default CartItem;
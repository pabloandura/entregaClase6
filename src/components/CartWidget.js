import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material/';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext'

const CartWidget = () => {
    const cartItems = useContext(CartContext);
    const qty = cartItems.calcItemsQty()
    return (
    <Link to='/cart'>    
        <Badge badgeContent={qty}>
            <ShoppingCartOutlined/>
        </Badge>
    </Link>
    )
}

export default CartWidget;
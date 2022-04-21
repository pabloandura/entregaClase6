import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material/';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
    <Link to='/cart'>    
        <Badge badgeContent={4}>
            <ShoppingCartOutlined/>
        </Badge>
    </Link>
    )
}

export default CartWidget;
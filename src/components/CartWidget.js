import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material/';

const CartWidget = (quantityCartItems) => {
    quantityCartItems = 5
    return (    
        <Badge badgeContent={quantityCartItems}>
            <ShoppingCartOutlined/>
        </Badge>
    )
}

export default CartWidget;
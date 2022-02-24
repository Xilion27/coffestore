import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <Badge badgeContent={test.calcItemsQty()} color="secondary">
            <ShoppingCart />
        </Badge>
    );
}

export default CartWidget;
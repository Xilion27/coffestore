import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './styledComponents';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }
    return (
        <ProductAmountContainer>
            <button variant="text" onClick={increment}>+</button>
            <ProductAmount>{count}</ProductAmount>
            <button variant="text" onClick={decrement}>-</button>
            {
                stock && count
                ? <button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</button>
                : <button variant="contained" disabled>Add to Cart</button>
            }
            
        </ProductAmountContainer>
    );
}

export default ItemCount;
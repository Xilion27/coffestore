import { useEffect, useState } from "react";


const ItemCount = ({stock = 0, initial=1, onAdd }) => {
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
    <>
        <div className="text-center">
           {count} Items 
        </div>
        <div className="row align-self-center">
            <button className="btn btn-secondary border col-sm-6" onClick={decrement}>-</button>
            <button className="btn btn-primary border col-sm-6" onClick={increment}>+</button>  
        </div>
        
        {
            stock && count
            ? <button className="btn btn-primary align-self-center col-sm-12" onClick={() => onAdd(count)}>Add to Cart</button>
            : <button className="btn btn-primary align-self-center col-sm-12" disabled>Add to Cart</button>
            
        }
    </>
)

}

export default ItemCount;
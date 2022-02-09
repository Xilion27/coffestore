import { useEffect, useState } from "react";

const Items = (props) => {
    const [amount, setAmount] = useState(0);
    

const countMore = () => {
    setAmount(amount+1);
}

const countLess = () => {
    setAmount(amount-1);
}

let stock = 5

//ComponentDidMount
useEffect(() => {
    if (amount<0) {
        alert("Amount value can't be negative")
        setAmount(0)
    }
    if (amount>stock) {
        alert('No Stock Available')
        setAmount(stock)
    }    
    console.log('You modified the amount of Items')
}, [amount]);


return (
    <>
        <div>
           {amount} Items 
        </div>
        <button className="btn btn-secondary border" onClick={countLess}>Restar</button>
        <button className="btn btn-primary border" onClick={countMore}>Sumar</button>        
    </>
)

}

export default Items;
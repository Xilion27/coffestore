import cart from "../cart.jpg"
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to='/cart'><img width={60} height={50} src={cart} alt='carrito'/></Link>
        
    )
}

export default CartWidget;
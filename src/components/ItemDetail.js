import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    
    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
    }

return (
<>
        {
            item
            ?
    <div className="row center">
        {console.log(item)}
            <div className="card container col-sm-6" key={item.id}>
                <div className="card-body">
                    <h5 className="center">{item.title}</h5>
                    <div className="m-3 col-sm-12">
                        <img className="card-img-top img-thumbnail rounded" src={item.image} alt="Card image cap"></img>
                    </div>
                    <div className="m-3 col-sm-12">
                        <p>{item.description}</p>
                    </div>
                </div>
                {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={item} onAdd={onAdd} />
                    : <button><Link to='/cart'>Carrito</Link></button>
                }                
            </div>
    </div>
            : <p>Cargando...</p>
        }    
</>
    );
}

export default ItemDetail;
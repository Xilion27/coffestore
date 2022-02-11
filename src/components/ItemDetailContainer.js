import { useEffect, useState } from "react";
import {list, getList} from "./ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './ItemCount';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

//Componentdidmount
useEffect(() => {
    getList(list[1], 2000)
    .then(res => setProduct(res))
    .catch((e) => console.log(e));
}, [])

return (
    <div className="row m-3 center">
        {
            product.map((product) => 
            <div className="card container m-3 col-sm-2" key={product.id}>
                <img className="card-img-top img-thumbnail rounded" src={product.image} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                </div>
                <Items />
            </div>
            )
        }    
    </div>
);}

export default ItemDetailContainer;
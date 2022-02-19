import { useEffect, useState } from "react";
import {list, getList} from "./ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './ItemCount';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    console.log(id)
//Componentdidupdate
useEffect(() => {
    getList(list.filter(item => item.id === parseInt(id)), 1000)
    .then(res => setItems(res))
    .catch((e) => console.log(e));
}, [id]);


return (
    <div className="row center">
        {
            items.map((items) =>  
            <div className="card container m-3 col-sm-2" key={items.id}>
                <img className="card-img-top img-thumbnail rounded" src={items.image} alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                </div>
                <Items />
            </div>
            )
        }    
    </div>
);}

export default ItemDetailContainer;
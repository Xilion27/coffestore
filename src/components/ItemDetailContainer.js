import { useEffect, useState } from "react";
import {list, getList} from "./ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './ItemCount';
import { useParams } from "react-router-dom";
import onAdd from "./ItemCount"
import { Link } from "react-router-dom";

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
            <div className="card container col-sm-6" key={items.id}>
                <div className="card-body">
                    <h5 className="center">{items.title}</h5>
                    <div className="m-3 col-sm-12">
                        <img className="card-img-top img-thumbnail rounded" src={items.image} alt="Card image cap"></img>
                    </div>
                    <div className="m-3 col-sm-12">
                        <p>{items.description}</p>
                    </div>
                </div>
                {
                    items === 0
                    ? <Items initial={items} onAdd={onAdd} />
                    : <Link to='/cart'>button</Link>
                }
                
            </div>
            )
        }    
    </div>
);}

export default ItemDetailContainer;
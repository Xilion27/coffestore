import { useEffect, useState } from "react";
import Items from "./ItemCount";
import {list, getList} from "./ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";



export default function ItemListContainer() {
    const [items, setItems] = useState([]);
    const {idCategory} = useParams();

        console.log(idCategory)

//Componentdidmount
useEffect(() => {
    getList(list, 1000)
    .then((res) => setItems(res))
    .catch((e) => console.log(e));
}, [])

return (
    <div className="row m-3 center">
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
);
}
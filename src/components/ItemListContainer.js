import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import {list, getList} from "./ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';



export default function ItemListContainer() {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();

        console.log(idCategory)


        
//Componentdidupdate
useEffect(() => {
    if (idCategory === undefined) {
        getList(list, 1000)
            .then((res) => setDatos(res))
            .catch((e) => console.log(e));
    } else {
        getList(list.filter(datos => datos.idCategory === parseInt(idCategory)), 1000)
            .then((res) => setDatos(res))
            .catch((e) => console.log(e)); 
        }
}, [idCategory])

return (
    <>
    
    <div className="row m-3 center">
        {            
            datos.map((items) =>  
            <div className="card container m-3 col-sm-2" key={items.id}>
                <img className="card-img-top img-thumbnail rounded" src={items.image} alt="Card image cap"></img>
                <div className="card-body">
                <Link to={`/item/${items.id}`}>
                <h5 className="card-title">{items.title}</h5>
                </Link>
                </div>
                {
                        ItemCount === 0
                        ? <ItemCount stock={items.stock} initial={ItemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><button variant="contained" color="secondary">CheckOut</button></Link>
                }
                
            </div>
            )
        }    
    </div>
    </>
);
}
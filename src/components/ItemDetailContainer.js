import {list, getList} from "./ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const {id} = useParams();

    console.log(id)
//Componentdidupdate
useEffect(() => {
    getList(list.filter(item => item.id === parseInt(id)), 1000)
    .then(res => setDato(res))
    .catch((e) => console.log(e));
}, [id]);

return (
    <ItemDetail item={dato} />
);}


export default ItemDetailContainer;
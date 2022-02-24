import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";

const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();
    console.log(idItem)
    useEffect(() => {
        customFetch(500, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
       
    console.log(idItem)
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;
import { useEffect, useState } from "react";
import Item from "./Item";
import {list, getList} from "./ItemList";



export default function ItemListContainer() {
    const [items, setItems] = useState([]);

getList(list, 5000)
.then((res) => setItems(res))
.catch((e) => console.log(e));

return (
    <div>
        Lista de cafe

        {items.length > 0 ? (
            items.map((item, index) => (
                <Item
                    key={index}
                    title={item.title}
                    description={item.description}
                    ingredients={item.ingredients}
                />
            ))
        ) : (
            <spam>No hay cosos</spam>
        )}
    </div>
);
}
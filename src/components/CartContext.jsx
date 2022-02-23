import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCatList] = useState ([
        {
      
            'title': "Black",
            'description': "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
            'image' : "https://media.istockphoto.com/photos/cup-of-coffee-with-heart-shape-smoke-and-coffee-beans-on-burlap-sack-picture-id1199467344?b=1&k=20&m=1199467344&s=170667a&w=0&h=4HfWi2vsFxw_9F5vuaAlQPNDJSt-h8fLleLLID2UEiI=",
            'ingredients': [
              "Coffee"
            ],
            idCategory: 1,
            id: 1
          },
    ]);

    return (
        <CartContext.Provider value={cartList}>
            {children}
        </CartContext.Provider>
    );
} 

export default CartContextProvider
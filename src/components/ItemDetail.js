import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);
    
    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item, qty);
        
    }

return (
    <>
        {
            item && item.image           
            ? 
            <DetailContainer>               
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.cost}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><button variant="contained" color="secondary">CheckOut</button></Link>
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Loading...</p> 
        }
    </>
    );
}

export default ItemDetail;
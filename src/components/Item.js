import { Link } from 'react-router-dom';
import { ProductContainer, Image, Info, Icon, Title } from './styledComponents';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (      
        <ProductContainer>
            <Image src={pictureUrl} />
            <Info>
                <Icon>
                    <strong>$ {price}</strong>
                </Icon>
                <Icon>
                    {stock} unid.
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`}>+ Info</Link>
                </Icon>
            </Info>
            <Title>{title}</Title>
        </ProductContainer>
    );
}

export default Item;










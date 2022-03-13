import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';
import FormatNumber from "../utils/FormatNumber";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { Top, TopButton, TopText, Bottom, Info, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button} from './styledCart'


const Cart = () => {
    const test = useContext(CartContext);
    const createOrder = () => {
      const itemsForDB = test.cartList.map(item => ({
        id: item.idItem,
        title: item.nameItem,
        price: item.costItem
      }));
  
      test.cartList.forEach(async (item) => {
        const itemRef = doc(db, "products", item.idItem);
        await updateDoc(itemRef, {
          stock: increment(-item.qtyItem)
        });
      });
  
      // Buyer esta hardcode, en siguiente implementacion debe ser otro array o con login
      let order = {
        buyer: {
          name: "Marquitos",
          email: "marquitos@123.com",
          phone: "123456789"
        },
        total: test.calcTotal(),
        items: itemsForDB,
        date: serverTimestamp()
      };
  
        
      const createOrderInFirestore = async () => {
        // Add a new document with a generated id
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }
  
      createOrderInFirestore()
        .then(result => alert('Ya tomamos tu pedido, toma nota de tu ID.\n\n\nOrder ID: ' + result.id + '\n\n'))
        .catch(err => console.log(err));
  
      test.removeList();
  
    }

    return (
        <WrapperCart>
            <TitleCart>CARRITO DE COMPRAS</TitleCart>
            <Top>
                <Link to='/category'><TopButton>SEGUIR COMPRANDO</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}>BORRAR TODO LOS PRODUCTOS</TopButton>
                    : <TopText>No tienes productos en carrito</TopText>
                }
            </Top>
            <ContentCart>
            <Bottom>
                <Info>
                    {
                        test.cartList.length > 0 &&
                            test.cartList.map(item => 
                            <Product key={item.idItem}>
                            <ProductDetail>
                                <ImageCart src={item.image} />
                                <Details>
                                <span>
                                    <b>Producto:</b> {item.nameItem}
                                </span>
                                <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>Eliminar</TopButton>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                                /
                                <ProductAmount>$ {item.costItem} por unidad</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>$ {test.calcTotalPerItem(item.idItem)} </ProductPrice>
                            </PriceDetail>
                            </Product>
                            )
                    }
                </Info>
                {
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>Tu cuenta</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Impuestos</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Descuento</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={-test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button onClick={createOrder}>PAGAR</Button>
                        </Summary>
                }
            </Bottom>
            </ContentCart>
        </WrapperCart>
    );

    
}

export default Cart;
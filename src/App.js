import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
     <Routes>
        <Route path="/" element={<div>Main Page</div>} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/category/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<p>Seccion nosotros</p>} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <NavBar />

     <Routes>
        <Route 
          path="/"
          element={
            <div>Main Page</div>
          }
        />
        
        <Route 
          path="/shop" 
          element={
            <ItemListContainer />           
          }
        />          
        
        <Route 
          path="/item/:id"
          element={
            {/* <ItemDetailContainer /> */}
          }
        />

        <Route 
          path="/category/:idCategory"
          element={
            <ItemListContainer />
          }
        />

        <Route 
          path="/cart"
          element={
            <p>Este sera el carrito</p>
          }
        />

        <Route 
          path="/about"
          element={
            <p>Somos especialistas en Cafe</p>
          }
        />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;

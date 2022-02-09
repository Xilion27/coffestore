import './App.css';
import NavBar from './components/NavBar';
import Items from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer /> 
    <displayData />
    <Items /> 
    </>
    
  );
}

export default App;

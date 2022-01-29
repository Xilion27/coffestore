import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting="Hola Mundo Coder" />
    </>
    
  );
}

export default App;

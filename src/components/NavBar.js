import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">The Coffe Store</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/category/#' className="nav-link">Catalogo</Link>
              </li>
              <li className="nav-item">
                <Link to='/category/1' className="nav-link">Solo Cafe</Link>
              </li>
              <li className="nav-item">
                <Link to='/category/2' className="nav-link">Con Leche</Link>
              </li>              
              <li className="nav-item">
                <Link to='/about' className="nav-link">About us</Link>
              </li>
            </ul>
            
            <Link to='/cart'><CartWidget /></Link>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;
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
                <Link to='/item/2' className="nav-link">Detalle</Link>
              </li>
              <li className="nav-item dropdown" >
                <Link to="/category/2" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Categorias
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/category/1">Solo</a></li>
                  <li><a className="dropdown-item" href="/category/2">Con Leche</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="/category/all">Todos</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link">About us</Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    )
}

export default NavBar;
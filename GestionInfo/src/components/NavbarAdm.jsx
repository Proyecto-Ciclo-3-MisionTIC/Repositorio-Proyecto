import { Link } from 'react-router-dom';
import logo from '../media/logo4r.png';
import {NavLink} from 'react-router-dom';


function Navbar() {
  return (
    <div className="App">
      <img src={logo} alt="technology accesories" className="logoImg"/>
      <ul className="menu">
          <li>Inicio</li>
          <li><NavLink to="/listarproductos" activeClassName="active" >Administracion de productos</NavLink></li>
          <li><NavLink to="/listarventas" activeClassName="active" >Administracion de ventas</NavLink></li>
          <li><NavLink to="/listarroles" activeClassName="active" >Gestion de usuarios</NavLink></li>
          <li><NavLink to="/" activeClassName="active" >Salir</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;

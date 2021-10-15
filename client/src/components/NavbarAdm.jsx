import logo from '../media/logo4r.png';
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <div className="App">
      <img src={logo} alt="technology accesories" className="logoImg"/>
      <ul className="menu">
          <li>Inicio</li>
          <li><NavLink to = "/listarproductos" > Administracion de productos </NavLink> </li> 
          <li><NavLink to = "/agregarventasadm" > Administracion de ventas </NavLink> </li>
          <li ><NavLink to ="listarroles" > Gestion de usuarios </NavLink> </li>
          <li>Salir</li>
      </ul>
    </div>
  );
}

export default Navbar;

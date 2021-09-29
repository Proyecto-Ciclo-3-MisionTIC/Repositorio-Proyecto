import logo from '../logo4r.png';

function Menu() {
  return (
    <div className="App">
      <img src={logo} alt="technology accesories" className="logoImg"/>
      <ul className="menu">
          <li>Inicio</li>
          <li>Administracion de productos</li>
          <li>Administracion de ventas</li>
          <li>Gestion de usuarios</li>
          <li>Salir</li>
      </ul>
    </div>
  );
}

export default Menu;

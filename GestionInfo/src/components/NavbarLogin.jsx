import logo from '../media/logo4r.png';

function Navbar() {
  return (
    <div className="App">
      <img src={logo} alt="technology accesories" className="logoImg"/>
      <ul className="menu">
          <li>Inicio</li>
          <li>Login</li>
      </ul>
    </div>
  );
}

export default Navbar;

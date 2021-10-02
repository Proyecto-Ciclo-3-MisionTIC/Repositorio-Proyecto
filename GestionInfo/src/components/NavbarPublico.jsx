import React from 'react'
import logo from '../media/logo4r.png';

const NavbarPublico = () => {
    return (
        <div className="App">
        <img src={logo} alt="technology accesories" className="logoImg"/>
        <ul className="menu">
            <li> <button type='submit'>Login</button> </li>
        </ul>
      </div>
    )
}

export default NavbarPublico

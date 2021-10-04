import React from 'react'
import logo from '../media/logo4r.png';
import { Button } from 'reactstrap';


const NavbarPublico = () => {
    return (
        <div className="App">
        <img src={logo} alt="technology accesories" className="logoImg"/>
        <ul className="menu">
            <li> <Button style={{ display: "flex", justifyContent: "end" }} color="danger"> > Login</Button>{' '}</li>
        </ul>
      </div>
    )
}

export default NavbarPublico

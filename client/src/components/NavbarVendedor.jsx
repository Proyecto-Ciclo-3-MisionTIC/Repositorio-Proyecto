import React from 'react'
import logo from '../media/logo4r.png';
import { NavLink } from "react-router-dom";


const NavbarVendedor = () => {
    return (
        <div className="App">
            <img src={logo} alt="technology accesories" className="logoImg"/>
            <ul className="menu">
                <li>Inicio</li>
                <li><NavLink to = "/ListProductsPriv" > Administracion de productos </NavLink> </li> 
                <li><NavLink to = "/agregarventasadm" > Administracion de ventas </NavLink> </li>
                <li>Salir</li>
            </ul>
        </div>
    )
}

export default NavbarVendedor



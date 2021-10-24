import React from 'react'
import logo from '../media/logo4r.png';
import Google from '../media/Google.png';
import { Link } from 'react-router-dom';


 const Login = () => {
    return (
        <div className="Container">
        <ul className="Label" >
            <div ><li> <img src={logo} alt="technology accesories" className="logoImg"/></li></div>            
            <div className="user"><li> <input placeholder="E-mail"/></li></div>
            <div className="password"><li><input type='password' placeholder="Contraseña"/></li></div>
            <div className="forget"><li> ¿Olvidaste tú contraseña?</li></div>
            <div className="login"><li>
                <Link to ='/HomePage'>
                <button className="mainbutton">Entrar</button>
                </Link>
                </li></div>
            <div className="crear"><li> <button className="mainbutton">Crear cuenta</button> 
            </li></div>
            <div><h5>---------------------</h5></div>
            <div className ="Google"><li >
              <img src={Google} alt="Acceso con Google" className="logoGoogle"/>
              <span>Continua con Google</span>
            </li></div>
        </ul>
        </div>
    )
}

export default Login

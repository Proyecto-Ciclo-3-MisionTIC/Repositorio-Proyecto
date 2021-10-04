import React from 'react'
import Navbar from "../components/NavbarLogin";

const LoginLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default LoginLayout

import React from 'react'
import Navbar from "../components/NavbarAdm";

const PrivateLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default PrivateLayout

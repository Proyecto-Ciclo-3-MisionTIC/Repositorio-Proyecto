import React from 'react'
import Navbar from "../components/NavbarAdm";

const AdmLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}  
        </div>
    )
}

export default AdmLayout

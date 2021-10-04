import React from 'react'
import NavbarVentas from "../components/NavbarVendedor";

const PrivateLayout = ({children}) => {
    return (
        <div>
            <NavbarVentas/>
            {children}
        </div>
    )
}

export default PrivateLayout

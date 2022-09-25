import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav>
            <ul>
                <li>Plantas de Exterior</li>
                <li>Plantas de Interior</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar
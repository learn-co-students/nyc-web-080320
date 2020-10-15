import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <NavLink to="/home">
                <p>home</p>
            </NavLink>
            <NavLink to="/dogs">
                <p>index</p>
            </NavLink>
            <NavLink to="/dogs/favorites">
                <p>favorites</p>
            </NavLink>
        </div>
    )
}

export default Navbar
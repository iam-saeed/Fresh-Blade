import React from 'react'

import logo from '../../assets/fresh_blade.png';

import './styles.css'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img id="logo" src={logo} alt="logo" />
            </div>
            <ul id="nav-list">
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    )
}

export default Navbar

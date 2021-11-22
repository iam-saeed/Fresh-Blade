import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/fresh_blade.png';

import './styles.css'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link to='/home'><img id="logo" src={logo} alt="logo" /></Link>
            </div>
            <ul id="nav-list">
                <li>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">Login</Link>
                </li>
                <li>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

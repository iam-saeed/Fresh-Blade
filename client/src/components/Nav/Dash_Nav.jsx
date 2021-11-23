import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/fresh_blade.png';

import './styles.css'

const Dash_Nav = () => {
    return (
        <nav>
            <div className="logo">
                <Link to='/home'><img id="logo" src={logo} alt="logo" /></Link>
            </div>
            <ul id="nav-list">
                <li>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/booking">booking</Link>
                </li>
                <li>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="#appointments">appointments</Link>
                </li>
                <li>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/logout">logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Dash_Nav

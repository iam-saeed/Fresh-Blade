import React, { useState } from 'react'
import { SidebarData } from './SidebarData'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Sidebar.css'


const Dash_Nav = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)



    return (
        <>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} style={{ cursor: 'pointer' }} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars" onClick={showSidebar} style={{ fontSize: '2rem' }}>
                        &times;
                    </Link>
                </li>
                {SidebarData.map((d, index) => {
                    return (
                        <li key={index} className={d.cName}>
                            <Link to={d.path}>
                                {d.icon}
                                <span>{d.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

export default Dash_Nav

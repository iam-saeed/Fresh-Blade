import React from 'react'
import Navbar from '../../components/Nav/Navbar.jsx'
import './styles.css'
import barberIcon from '../../assets/rubber-good-job-1.png'

const Home = () => {
    return (
        <>
        <header>
            <Navbar />
        </header>
        <section id="landing_page_section">
            <div className="container">
            <h1>Look Good. Feel Good.</h1>
            <p>Discover barbers near you.</p>
            <button>Find A Professional</button>
            </div>
            
        </section>
        </>
    )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Nav/Navbar'
import './styles.css'

const Signup = () => {
    return (
        <>
        <header>
            <Navbar />
        </header>
        <section className="signup">
            <form action="">
                <h1 style={{ fontWeight: 'bold' }}>Sign Up</h1> 
                <br />
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="fname" className="form-control" placeholder="First Name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="form-control" placeholder="Password" required />
            </div>
            <br />
                <Link style={{ textDecoration: 'none', color: '#fff' }} to="/login"><p>Already have an account?</p></Link>
            <div className="form-group">
                <input type="submit" name="submit_btn" className="form-control" style={{ backgroundColor: '#a8815b', color: '#fff' }} />
            </div>
            </form>
        </section>
        </>
    )
}

export default Signup

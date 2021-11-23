import React from 'react'
import Navbar from '../Nav/Navbar'
import './styles.css'

const Login = () => {
    return (
        <>
        <header>
            <Navbar />
        </header>
        <section className="signup">
            <form action="">
                <h1  style={{ fontWeight: 'bold' }}>Login</h1> 
                <br />
            <div className="form-group">
                <label htmlFor="name">Email</label>
                <input type="text" name="name" className="form-control" placeholder="Email" required />
            </div>
            <div className="form-group">
                <label htmlFor="name">Password</label>
                <input type="password" name="name" className="form-control" placeholder="Password" required />
            </div>
            <br />
                <p>Forgot Password</p>
            <div className="form-group">
                <input type="submit" name="name" className="form-control" style={{ backgroundColor: '#a8815b', color: '#fff' }} />
            </div>
            </form>
        </section>
        </>
    )
}

export default Login

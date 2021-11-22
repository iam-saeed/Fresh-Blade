import React from 'react'
import './styles.css'

const Login = () => {
    return (
        <section className="signup">
            <form action="">
                <h2>Login</h2> 
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
                <input type="submit" name="name" className="form-control" />
            </div>
            </form>
        </section>
    )
}

export default Login

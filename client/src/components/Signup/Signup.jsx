import React from 'react'
import './styles.css'

const Signup = () => {
    return (
        <section className="signup">
            <form action="">
                <h2>Sign Up</h2> 
                <br />
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="fname" className="form-control" placeholder="First Name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Email</label>
                <input type="email" name="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="form-group">
                <label htmlFor="name">Password</label>
                <input type="password" name="password" className="form-control" placeholder="Password" required />
            </div>
            <br />
                <p>Already have an account?</p>
            <div className="form-group">
                <input type="submit" name="name" className="form-control" />
            </div>
            </form>
        </section>
    )
}

export default Signup

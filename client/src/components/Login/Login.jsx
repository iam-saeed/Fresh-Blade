import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Navbar from '../Nav/Navbar'
import './styles.css'

const Login = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/user/login", form)
        .then(res => {
            console.log(res)
            navigate("/bookings")
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <>
        <header>
            <Navbar />
        </header>
        <section className="signup">
            <form onSubmit={onSubmit}>
                <h1  style={{ fontWeight: 'bold' }}>Login</h1> 
                <br />
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" className="form-control" placeholder="Email" onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="name">Password</label>
                <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
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

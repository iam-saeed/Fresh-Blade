import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Nav/Navbar'
import './styles.css'

const Signup = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value, type, checkbox, checked } = e.target
        const valueToUse = type === "checkbox" ? checked : value
        setForm({
            ...form,
            [name]: valueToUse
        })
        console.log(form)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/user/signup", form)
        .then(res => {
            console.log(res)
            navigate("/login")
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
                <h1 style={{ fontWeight: 'bold' }}>Sign Up</h1> 
                <br />
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" className="form-control" placeholder="Full Name" onChange={handleChange} value={form.name} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} value={form.email} required/> 
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} value={form.password} required />
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

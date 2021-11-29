const express = require('express');
const { cors } = require('cors')
const secrets = require("../config/secrets")
const User = require('./user-model.js')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


const router = express.Router();

function generateToken(user) {
    const payload = {
        subject: user.id,
        email: user.email
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options )
}

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hash = await bcrypt.hashSync(password, 10)
        const newUser = await User.addUser({
            name: name,
            email: email,
            password: hash
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.post("/login", (req, res) => {
    let { email, password } = req.body

    User.findBy({ email })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user) 
            res.status(200).json({ message: `Welcome ${user.name}`, token })
            
        } else {
            res.status(401).json({ message: `Invalid credentials`})
        }
    })
    .catch(err => {
        res.status(500).json({ message: err.message})
    })
}) 

module.exports = router
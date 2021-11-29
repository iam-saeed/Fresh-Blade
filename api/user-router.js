const express = require('express');
const { cors } = require('cors')
const User = require('./user-model.js')
const bycrypt = require("bcryptjs")


const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hash = await bycrypt.hashSync(password, 10)
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

module.exports = router
const express = require('express');
const cors = require('cors');
const userRouter = require("./api/user-router.js")
const server = express();

server.use(cors());
server.use(express.json());
server.use("/user", userRouter);

module.exports = server
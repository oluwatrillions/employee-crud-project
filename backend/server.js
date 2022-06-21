const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config({ path: '../config/.env' })

const DBConn = require('../model/ConnectDB')

DBConn();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());

app.use('/auth', require('../routes/authRoute'))

app.use('/employees', require('../routes/employeeRoutes'))
app.use('/register', require('../routes/registerRoute'))

app.listen(process.env.PORT, (req, res) => {
    console.log(`server is running on port ${process.env.PORT}`);
})
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config({ path: '../config/.env' })
const cookieParser = require('cookie-parser')
const jwtAuth = require('../middleware/verifyJWT')


const DBConn = require('../model/ConnectDB')

DBConn();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/auth', require('../routes/authRoute'))
app.use('/register', require('../routes/registerRoute'))

app.use(jwtAuth)
app.use('/user', require('../routes/userRoute'))
app.use('/employees', require('../routes/employeeRoutes'))



app.listen(process.env.PORT, (req, res) => {
    console.log(`server is running on port ${process.env.PORT}`);
})
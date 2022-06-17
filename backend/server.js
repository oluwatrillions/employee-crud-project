const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config({ path: '../config/.env' })

const DBConn = require('../model/ConnectDB')

DBConn();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.use('/employees', require('../routes/employeeRoutes'))

mongoose.connection.once('open', () => {
    console.log('we are connected');

})

app.listen(process.env.PORT, (req, res) => {
    console.log(`server is running on port ${process.env.PORT}`);
})
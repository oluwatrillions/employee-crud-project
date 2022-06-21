const Users = require('../model/EmployeesSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const verifyAuth = async (req, res) => {
    const { user, pwrd } = req.body
    
    if (!user || !pwrd)
        return res.status(400).json({ 'message': 'username and password are required' })
    
    const foundUser = await Users.findOne({ username: user }).exec()
    
    if (!foundUser)
        return res.sendStatus(403)
    
    const matchedUser = await bcrypt.compare(pwrd, foundUser.password)
}

module.exports = {verifyAuth}
const mongoose = require('mongoose')
const NewUser = require('../model/newUserSchema')

const registerNewUser = async (req, res, next) => {
    const { user, password } = req.body
    
    if (!user || !password)
        return res.status(400).json({ 'Error': 'Invalid username, email or password' });
    
    const duplicate = await NewUser.findOne({ username: user }).exec
    if (duplicate)
        return res.status(409).json({ 'Error': 'Conflict. Please enter another username' })
    
    try {
         const createdUser = await NewUser.create({
        "username": user,
        "password": password
    })

    console.log(createdUser);
        res.status(200).json({ 'Success': `${user} has been created` })
        
    } catch (error) {
        res.status(500).json({'message': error.message})
    }
   
}


module.exports = {registerNewUser};
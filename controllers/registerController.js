const NewUser = require('../model/RegisterSchema')
const bcrypt = require('bcrypt')

const registerNewUser = async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password)
        return res.status(400).json({ 'message': 'Invalid username, email or password' });
    
    const duplicate = await NewUser.findOne({ username }).exec()

    if (duplicate)
        return res.sendStatus(409);
    
    const hashedPwd = await bcrypt.hash(password, 12)
    
    try {
        const createdUser = await NewUser.create({
            "username": username,
            "password": hashedPwd
        });

        console.log(createdUser);
        
        res.status(201).json({ 'success': `${username} has been created` })
        
    } catch (error) {
        res.status(500).json({'message': error.message})
    } 
}


module.exports = {registerNewUser};
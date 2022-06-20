const NewUser = require('../model/RegisterSchema')

const registerNewUser = async (req, res) => {
    const { user, password } = req.body;
    
    if (!user || !password)
        return res.status(400).json({ 'message': 'Invalid username, email or password' });
    
    const duplicate = await NewUser.findOne({ username: user }).exec()

    if (duplicate)
        return res.sendStatus(409);
    
    try {
        const createdUser = await NewUser.create({
            "username": user,
            "password": password
        });

        console.log(createdUser);
        
        res.status(201).json({ 'success': `${user} has been created` })
        
    } catch (error) {
        res.status(500).json({'message': error.message})
    }
   
}


module.exports = {registerNewUser};
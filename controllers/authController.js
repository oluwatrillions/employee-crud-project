const Users = require('../model/RegisterSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const verifyAuth = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password)
        return res.status(400).json({ 'message': 'username and password are required' })
    
    const foundUser = await Users.findOne({ username: username}).exec()   
    if (!foundUser)
        return res.sendStatus(403)
    
    const matchedUser = await bcrypt.compare(password, foundUser.password)

    if (matchedUser) {
        const accessToken = jwt.sign(
            { "username": foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        foundUser.refreshToken = refreshToken
        const userAuth = await foundUser.save()
        console.log(userAuth);

        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 })
        res.json(accessToken);
        console.log(accessToken);
    }
    else {
        res.sendStatus(401)
    }
}

module.exports = { verifyAuth };
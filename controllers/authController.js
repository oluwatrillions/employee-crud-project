const Users = require('../model/RegisterSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const verifyAuth = async (req, res) => {
    const { user, pwrd } = req.body
    if (!user || !pwrd)
        return res.status(400).json({ 'message': 'username and password are required' })
    
    const foundUser = await Users.findOne({ username: user}).exec()   
    if (!foundUser)
        return res.sendStatus(403)
    
    const matchedUser = await bcrypt.compare(pwrd, foundUser.password)

    if (matchedUser) {
        const accessToken = jwt.sign(
            { "user": foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
            { "user": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        foundUser.refreshToken = refreshToken
        const userAuth = await foundUser.save()

        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        res.json(accessToken);
    }
    else {
        res.sendStatus(401)
    }
}

module.exports = { verifyAuth };
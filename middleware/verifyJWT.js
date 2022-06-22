const Users = require('../model/EmployeesSchema')
const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const authHeaders = req.headers.authorization
    if (!authHeaders?.startswith('Bearer'))
        return res.status(401)
    const token = authHeaders.split('')[1]
    console.log(token);

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err)
                return res.sendStatus(403)
            req.user = decoded.username
            next();
        }
    )
}

module.exports = verifyJWT
const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const authHeaders = req.headers.authorization || req.headers.Authorization
    if (!authHeaders?.startswith('Bearer'))
        return res.sendStatus(401)
    const token = authHeaders.split('')[1]
    console.log(token);

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err)
                return res.sendStatus(403)
            req.username = decoded.username
            next();
        }
    );
}

module.exports = verifyJWT;
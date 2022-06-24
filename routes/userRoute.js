const express = require('express')
const router = express.Router()
const userRoute = require('../controllers/userControllers')
const jwtAuth = require('../middleware/verifyJWT')


router.route('/')
    .get(jwtAuth, userRoute.getAllUsers)

router.route('/:id')
    .delete(userRoute.deleteUser)
    .get(userRoute.getOneUser)

    module.exports = router
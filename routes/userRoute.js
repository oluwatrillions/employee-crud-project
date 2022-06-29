const express = require('express')
const router = express.Router()
const userRoute = require('../controllers/userControllers')


router.route('/')
    .get(userRoute.getAllUsers)

router.route('/:id')
    .delete(userRoute.deleteUser)
    .get(userRoute.getOneUser)

    module.exports = router
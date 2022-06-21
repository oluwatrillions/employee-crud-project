const express = require('express')
const router = express.Router()
const auth = require('../controllers/authController')


router.route('/')
    .get(auth.verifyAuth)
        

    module.exports = router
const express = require('express');
const router = express.Router();
const registerEmp = require('../controllers/registerController');


router.post('/', registerEmp.registerNewUser);

module.exports = router;
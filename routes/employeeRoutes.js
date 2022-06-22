const express = require('express')
const router = express.Router()
const controllers = require('../controllers/employeesControllers')
const jwtAuth = require('../middleware/verifyJWT')

router.route('/')
    .get(jwtAuth, controllers.getEmployees)
    .post(controllers.createEmployees)
   


router.route('/:id')
    .put(controllers.updateEmployees)
    .delete(controllers.deleteEmployees)
    .get(controllers.getEmployee)

module.exports = router;


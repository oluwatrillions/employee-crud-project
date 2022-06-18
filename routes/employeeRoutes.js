const express = require('express')
const router = express.Router()

const controllers = require('../controllers/employeesControllers')

router.route('/')
    .get(controllers.getEmployees)
    .post(controllers.createEmployees)
   


router.route('./:id')
    .put(controllers.updateEmployees)
    .delete(controllers.deleteEmployees)
    .get(controllers.getEmployee)

module.exports = router;


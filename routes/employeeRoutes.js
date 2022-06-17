const express = require('express')
const router = express.Router()

const controllers = require('../controllers/employeesControllers')

router.route('/')
    .get(controllers.getEmployees)
    .post(controllers.createEmployees)
    .put(controllers.updateEmployees)
    .delete(controllers.deleteEmployees)


router.route('./:id')
    .get(controllers.getEmployee)

module.exports = router;


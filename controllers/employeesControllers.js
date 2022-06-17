const mongoose = require('mongoose')
const data = require('../data/data.json')

const getEmployees = (req, res, next) => {
    res.send(data)
    next();
}

const createEmployees = async (req, res, next) => {
    let result;

    if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({'error': "Please enter a name or password"})
    }
    
    try {
        const result = {
            name: req.body.name,
            email: req.body.email,
            passwrod: req.body.password
        };

    } catch (error) {
        console.log(error);
    }

    data.push(result);
        res.send(data)
    next();
}

const updateEmployees = (req, res, next) => {
    const employee = data.filter(employee => employee.id === req.body.id)

    
    res.json()
     next();
}

const deleteEmployees = (req, res, next) => {
    res.json()
     next();
}

const getEmployee = (req, res, next) => {
    res.json()
     next();
}


module.exports = {
    getEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployees,
    getEmployee
}
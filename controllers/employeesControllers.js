const Users = require('../model/EmployeesSchema')
const bcrypt = require('bcrypt')

const getEmployees = async (req, res) => {
    const users = await Users.find()
    if (!users)
        return res.status(204).json({ 'message': 'no empoyee found' })
    res.json(users)
}

const createEmployees = async (req, res) => {
    const { username, password, email } = req.body
    if (!username || !password)
        return res.status(400).json({ 'message': 'please enter your name and password' });
    
    const duplicate = await Users.findOne({ username }).exec()

    const hashedPwd = await bcrypt.hash(password, 12)
    
    if (duplicate)
        return res.sendStatus(409);
    
    try {
        const newUser = await Users.create({
            username: req.body.username,
            password: hashedPwd,
            email: req.body.email
        })
        return res.status(201).json({'success': `${username} has been created`})

    } catch (error) {
        console.log(error.message);
    }
}

const updateEmployees = async (req, res) => {
    if (!req.params.id)
        return res.status(400).json({ 'message': 'please provide an employee id to update' })
    
    try {
        const editedEmployee = await Users.findOne({ _id: req.params.id }).exec()
            editedEmployee.username = req.body.username;
            editedEmployee.password = req.body.password;
            editedEmployee.email = req.body.email;
        const result = await editedEmployee.save();
        res.json(result)
    } catch (error) {
        console.log(error);
    }
    
}

const deleteEmployees = async (req, res) => {
    if (!req.params.id)
        return res.status(400).json({ 'message': 'please provide an employee id to delete' })
    
    const deleteEmp = await Users.findOne({ _id: req.params.id }).exec()
    if (!deleteEmp)
        return res.status(400).json({ 'message': `no employee with id ${req.params.id}` })
    const deletedEmp = await deleteEmp.deleteOne();
    res.json({'message': 'employee has been deleted'})

    res.json(deletedEmp)
}

const getEmployee = async (req, res) => {
       if (!req?.params?.id)
        return res.status(400).json({ 'message': 'please provide an employee id' })
        
    const getSingleEmployee = await Users.findOne({ _id: req.params.id }).exec()
     if (!getSingleEmployee)
        return res.status(204).json({ 'message': `no employee with id ${req.params.id}` })
   
    res.json(getSingleEmployee)
}


module.exports = {
    getEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployees,
    getEmployee
}
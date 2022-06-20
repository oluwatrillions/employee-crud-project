const Users = require('../model/EmployeesSchema')

const getEmployees = async (req, res) => {
    const users = await Users.find()
    if (!users)
        return res.status(204).json({ 'message': 'no empoyee found' })
    res.json(users)
}

const createEmployees = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password)
        return res.status(400).json({ 'message': 'please enter your name and password' });
    
    const duplicate = await Users.findOne({ username }).exec()
    
    if (duplicate)
        return res.sendStatus(409);
    
    try {
        const newUser = await Users.create({
            username: req.body.username,
            password: req.body.password
        })
        return res.status(201).json(newUser)

    } catch (error) {
        console.log(error.message);
    }
}

const updateEmployees = async (req, res, next) => {
    if (!req.params.id)
        return res.status(400).json({ 'message': 'please provide an employee id to update' })
    
    try {
        const editedEmployee = await Users.findOne({ _id: req.params.id }).exec()
            editedEmployee.username = req.body.username;
            const result = await editedEmployee.save();
    } catch (error) {
        console.log(error);
    }
    res.json(result)
}

const deleteEmployees = async (req, res) => {
    if (!req.params.id)
        return res.status(400).json({ 'message': 'please provide an employee id to delete' })
    
    const deleteEmp = await Users.findOne({ _id: req.params.id }).exec()
    if (!deleteEmp)
        return res.status(400).json({ 'message': `no employee with id ${req.params.id}` })
    const deletedEmp = await deleteEmp.deleteOne();

    res.json(deletedEmp)
}

const getEmployee = async (req, res) => {
       if (!req.params.id)
        return res.status(400).json({ 'message': 'please provide an employee id' })
    
    const getSingleEmployee = await Users.findOne({ _id: req.params.id }).exec()
     if (!getSingleEmployee)
        return res.status(400).json({ 'message': `no employee with id ${req.params.id}` })
   
    res.json(getSingleEmployee)
}


module.exports = {
    getEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployees,
    getEmployee
}
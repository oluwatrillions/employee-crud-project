const Users = require('../model/RegisterSchema')

const getAllUsers = async (req, res) => {
    const users = await Users.find();
    if (!users) res.status(204).json({ 'message': 'No users found' })
    res.json(users)
}

const deleteUser = async (req, res) => {
    if (!req.params.id) return res.status(400).json({ 'message': 'User id required' })
    const user = await Users.findOne({ _id: req.params.id }).exec()
    if (!user) return res.status(204).json({ 'message': 'User does not exist' })
    const deletedUser = await user.deleteOne()
    res.json({'message': 'User deleted successfully'})
}

const getOneUser = async (req, res) => {
    if (!req.params.id) return res.status(400).json({ 'message': 'User id required' })
    const user = await Users.findOne({ _id: req.params.id }).exec()
    if (!user) return res.status(204).json({ 'message': 'User does not exist' })
    res.json(user);
}

module.exports = { getAllUsers, deleteUser, getOneUser };
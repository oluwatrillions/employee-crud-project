const mongoose = require('mongoose')
const Schema = mongoose.Schema


const employeeSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String
    }
});

module.exports = mongoose.model('createEmployee', employeeSchema);
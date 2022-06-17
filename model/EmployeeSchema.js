const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    position: {
        type: String,
    },
    degree: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const employeeModel = mongoose.model('employee', userSchema)

module.exports = employeeModel;


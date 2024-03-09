const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    },
    image: {
        type: String
    }
})

const userModel = mongoose.model('user', userSchema);
module.exports = userModel
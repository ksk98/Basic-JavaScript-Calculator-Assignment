const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    name: String,
    surname: String,
    login: String,
    password: String,
    email: String
})

const model = mongoose.model('users', user)

module.exports = model
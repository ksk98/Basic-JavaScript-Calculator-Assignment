const mongoose = require('mongoose')
const Schema = mongoose.Schema

const image = new Schema({
    title: String,
    description: String,
    date: Date,
    filename: String,
    path: String,
    size: Number
})

const model = mongoose.model('images', image)

module.exports = model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gallery = new Schema({
    title: String,
    description: String,
    date: Date,
    visibility: {
        type: String,
        enum: ['public', 'private']
    }
})

const model = mongoose.model('galleries', gallery)

module.exports = model
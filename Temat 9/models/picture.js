const mongoose = require('mongoose')

const PictureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        default: "./images"
    },
    size: {
        type: Number,
        max: 10000
    }
})

const Picture = mongoose.model('Picture', PictureSchema)

module.exports = Picture
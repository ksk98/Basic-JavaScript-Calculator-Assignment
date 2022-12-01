const express = require('express')
const port = 8000
const bodyParser = require('body-parser')
const app = express()
const userRoutes = require('./routes/users.js')
const mongoose = require('./db/mongoose.js')
const Picture = require('./models/picture.js')

app.use(bodyParser.json())
app.use('/users', userRoutes)
app.set('view engine', 'hbs')

const picture = new Picture({name: "foto_01", sciezka: "./images", rozmiar: 2346})
picture.save().then(() => console.log(picture)).catch(err => console.log(err))

Picture.find({
    rozmiar: {$gt: 2345}
}).then((pictures) => {
    console.log(pictures)
}).catch(err => console.log(err))

app.listen(port)
const express = require('express')
const port = 8000
const bodyParser = require('body-parser')
const app = express()
const userRoutes = require('./routes/users.js')
const pictureRoutes = require('./routes/pictures.js')
const mongoose = require('./db/mongoose')
const Picture = require('./models/picture')

app.use(bodyParser.json())

app.use('/users', userRoutes)
app.use('/pictures', pictureRoutes)
app.set('view engine', 'hbs')

app.listen(port)
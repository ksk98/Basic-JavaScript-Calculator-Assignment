const express = require('express')
const port = 8000
const bodyParser = require('body-parser')
const app = express()
const userRoutes = require('./routes/users.js')
const pictureRoutes = require('./routes/pictures.js')
const mongoose = require('./db/mongoose')
const Picture = require('./models/picture')

const hbs = require('express-handlebars')
const path = require('path')

app.user(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/users', userRoutes)
app.use('/pictures', pictureRoutes)

app.engine('hbs', hbs.engine({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/',
runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
}}))
app.set('view engine', 'hbs')

app.listen(port)
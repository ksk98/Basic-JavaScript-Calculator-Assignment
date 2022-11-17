const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const userRoutes = require('./routes/users.js')

const app = express()
app.set('view engine', 'hbs')
app.use(bodyParser.json())

app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.render('index', {
        title: "Gallery",
        body: "Photos"
    })
})

app.listen(port, () => {console.log("Application is listening on localhost:" + port)})

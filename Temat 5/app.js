const express = require('express')
const YAML = require('yamljs')
const { connector } = require('swagger-routes-express')
const swaggerUi = require('swagger-ui-express');
const api = require('./api')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const makeApp = () => {
    const apiDefinition = YAML.load('swagger.yaml') // load the api as json
    const connect = connector(api, apiDefinition) // make the connector
    const app = express() // make the app

    // do any other app stuff, such as wire in passport, use cors etc
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDefinition));
    app.use(bodyParser.json())
    app.listen(3000, () => console.log("App is listening on 3000"))

    connect(app) // attach the routes

    // add any error handlers last

    return app
}

makeApp()
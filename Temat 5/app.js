const api = require('./api')
const YAML = require('yamljs')
const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const { connector } = require('swagger-routes-express')

const makeApp = () => {
    const apiDefinition = YAML.load('swagger.yaml')
    const connect = connector(api, apiDefinition)
    const app = express()

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDefinition));
    app.use(bodyParser.json())
    app.listen(3000, () => console.log("App is listening on 3000"))

    connect(app)
    return app
}

makeApp()
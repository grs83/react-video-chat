const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, './public')))

routes(app)

app.listen(4200, () => {
    console.log('Listing on 4200!')
})

module.exports = app;

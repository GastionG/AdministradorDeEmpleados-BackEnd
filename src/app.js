const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/empleados', require('./routes/empleados.routes'))

app.set('port', 4000)

module.exports = app;
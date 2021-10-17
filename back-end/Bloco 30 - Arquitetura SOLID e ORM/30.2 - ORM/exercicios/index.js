const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())

const Router = require('./src/routes')

app.use('/books', Router.books)

app.listen(PORT, () => {
  'App rodando'
})
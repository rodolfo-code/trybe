const express = require('express')
const { Store } = require('./src/models')

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/', (req, res) => {
  Store.findAll().then(dados => {
    res.status(200).json(dados)
  }).catch(e => {
    console.log(e.message)
    res.status(500).json({message: 'algo errado'})
  })
})

app.listen(PORT, () => {
  console.log(`rodando na porta ${PORT}`)
})
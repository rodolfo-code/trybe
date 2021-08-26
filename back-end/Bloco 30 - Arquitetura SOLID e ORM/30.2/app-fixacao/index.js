const express = require('express')
const { Store } = require('./models')

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/', (req, res) => {
  // try {
  //   const data = Store.findAll()

  //   res.status(200).send(data)   
  // } catch (error) {
  //   console.log(error.message)   
  //   res.status(500).json({message: "Something went wrong!!"}) 
  // }
  Store.findAll().then(data => {
    res.status(200).send(data)
  })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na port ${PORT}`)
})
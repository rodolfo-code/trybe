const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use(bodyParser.json())

const { Book } = require('./src/models')

app.get('/books/search', async (req, res) => {
  const { author} = req.query
  let rep = author.replace('%', ' ')
  console.log(author)
  console.log(rep)

  const books = await Book.findAll({
    where: { 
      author: rep 
    }
  })

  if(!books) {
    return res.status(500).json({message: 'Algo errado'})
  }
  res.status(200).json(books)
})

app.get('/books', async (req, res) => {
  const books = await Book.findAll({
    order: [
      ['title', 'ASC'],
      ['createdAt', 'DESC']
    ]
  })

  if(!books) {
    return res.status(500).json({message: 'Algo errado'})
  }
  res.status(200).json(books)
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id)

  if(!book) {
    return res.status(500).json({message: 'Algo errado'})
  }
  res.status(200).json(book)  
})

app.post('/books', async (req, res) => {
    // console.log(req.body)
  const { title, author, pageQuantity } = req.body;

  const newBook = await Book.create({ title, author, pageQuantity })

  res.status(200).json(newBook)
})

app.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  console.log(req.body)

  const updateBook = await Book.update({title, author, pageQuantity}, { 
    where: { id }
   })

  res.status(200).json(updateBook)
})

app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;

  const deleteBook = await Book.destroy({
    where: { id }
  })

  res.status(200).json(deleteBook)
})

app.listen(PORT, () => {
  'App rodando'
})
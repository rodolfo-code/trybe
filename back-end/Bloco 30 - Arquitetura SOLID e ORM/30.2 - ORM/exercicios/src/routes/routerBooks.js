const { Router } = require('express')

const router = Router()

const { Book } = require('../models')

router.get('/search', async (req, res) => {
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

router.get('/', async (req, res) => {
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

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id)

  if(!book) {
    return res.status(500).json({message: 'Algo errado'})
  }
  res.status(200).json(book)  
})

router.post('/', async (req, res) => {
    // console.log(req.body)
  const { title, author, pageQuantity } = req.body;

  const newBook = await Book.create({ title, author, pageQuantity })

  res.status(200).json(newBook)
})

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  console.log(req.body)

  const updateBook = await Book.update({title, author, pageQuantity}, { 
    where: { id }
   })

  res.status(200).json(updateBook)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deleteBook = await Book.destroy({
    where: { id }
  })

  res.status(200).json(deleteBook)
})

module.exports = router;
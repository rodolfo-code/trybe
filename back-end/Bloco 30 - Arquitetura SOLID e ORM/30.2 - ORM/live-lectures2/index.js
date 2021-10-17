const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());

const port = 3000

const { Category, Product } = require('./src/models');

app.get('/categories', async (req, res) => {
  const categories = await Category.findAll();
  res.status(200).json(categories);
});

app.get('/categories/:id', async (req, res) => {
  const categories = await Category.findByPk(req.params.id);
  res.status(200).json(categories);
});

app.post('/categories', async (req, res) => {
  const {name} = req.body;
  const categories = await Category.create({name});
  res.status(200).json(categories);
});

// produtos

app.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
})

app.listen(port, () => console.log(`Example app listening on port port!`))
const rescue = require('express-rescue');
const Joi = require('joi');
const { Product } = require('../models');
const productService = require('../services/products');
const validate = require('../middlewares/validate');

const Schema = Joi.object({
  name: Joi.string().not().empty().required(),
  description: Joi.string().not().empty().required(),
  price: Joi.number().not().empty().required()
.min(0),
}).message({
  'any.required': 'O campo {{#label}} é obrigatório',
});

const createProduct = [
  validate(Schema),

  rescue(async (req, res, next) => {
    const { name, description, price } = req.body;

    const newProduct = await productService.createProduct({ name, description, price });

    if (newProduct.error) return next(newProduct.error);

    res.status(201).json(newProduct);
  }),
];

const getAllProducts = rescue(async (req, res) => {
  const products = await Product.findAll();

  res.status(200).json(products);
});

const getProductById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const products = await Product.findByPk(id);

  if (!products) {
    return next({
      statusCode: 404,
      message: 'Produto não encontrado.',
    });
  }

  res.status(200).json(products);
});

const updateProduct = rescue(async (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;

  await Product.update({ name, description }, { where: { id } });

  res.status(200).json({ message: 'Produto atualizado com sucesso' });
});

const destroyProduct = rescue(async (req, res) => {
  const { id } = req.params;

  await Product.destroy({ where: { id } });

  res.status(204).end();
});

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  destroyProduct,
};

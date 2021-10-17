const { Product } = require('../models/product');

const createProduct = async (name, description, price) => {
  const existingProduct = await Product.findOne({ where: { name } });

  if (existingProduct) {
    return {
      error: {
        code: 'product_already_exists',
        message: `Produto com nome ${name} já existe. Id: ${existingProduct.id}`,
      },
    };
  }

  return Product.create({ name, description, price });
};

module.exports = {
  createProduct,
};
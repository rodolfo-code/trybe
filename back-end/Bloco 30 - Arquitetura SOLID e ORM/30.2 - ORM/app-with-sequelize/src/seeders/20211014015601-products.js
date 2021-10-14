'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Products',
  [
    {
      productName: 'Iphone 8',
      productQuantity: 28,
      product_category: 'Smartphone',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      productName: 'Lenovo z800',
      productQuantity: 30,
      product_category: 'Laptop',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ]),

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Products', null, {})
  }
};

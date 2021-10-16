'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Categories', [{
        name: 'Some category',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
     },{
        name: 'Another category',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Categories', null, {});
  }
};

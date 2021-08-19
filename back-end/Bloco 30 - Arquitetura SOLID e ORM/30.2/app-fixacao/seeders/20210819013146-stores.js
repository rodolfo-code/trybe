'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Stores", [
      {
        name: "Criativamente",
        description: "Loja de diversos segmentos"
      },
      {
        name: "Tem de tudo",
        description: "Pode vir que aqui tem tudo"
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Stores", null, {})
  }
};

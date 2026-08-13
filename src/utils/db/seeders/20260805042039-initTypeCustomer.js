'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TypeCustomers', [
      {
        name: 'Basico',
        description: 'Cliente nuevo.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Confiable',
        description: 'Cliente que lleva 5 meses.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeCustomers', null, {});
  }
};

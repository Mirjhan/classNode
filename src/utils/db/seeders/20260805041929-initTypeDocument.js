'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TypeDocuments', [
      {
        name: 'DNI',
        description: 'Documento Nacional de Identidad',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'CE',
        description: 'Carnet de Extranjería',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TypeDocuments', null, {});
  }
};

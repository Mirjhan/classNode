'use strict';
const { faker } = require('@faker-js/faker');
const db = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    let customers = []
    const typeCustomer = await db.TypeCustomer.findAll({raw: true})
    const typeDocument = await db.TypeDocument.findAll({raw: true})


    for (let i = 0; i < 10; i++) {

      const { id: idTypeCustomer } = faker.helpers.arrayElement(typeCustomer)
      const { id: idTypeDocument } = faker.helpers.arrayElement(typeDocument)
      
      console.log(idTypeDocument)
 
      const e = {
        idTypeCustomer: idTypeCustomer,
        idTypeDocument: idTypeDocument,
        document: faker.string.numeric({ length: 8 }),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        latitude: faker.location.latitude(),
        longitude: faker.location.longitude(),
        phone: faker.string.numeric({ length: 9 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      customers.push(e)

    }
    await queryInterface.bulkInsert('Customers', customers)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};

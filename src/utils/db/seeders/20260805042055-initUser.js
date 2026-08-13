'use strict';
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    let data = []
    for (let i = 0; i < 10; i++) {
      const e = {

        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.string.numeric(9),
        //latitude: faker.location.latitude(),
        //longitude: faker.location.longitude(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      data.push(e)

    }
    await queryInterface.bulkInsert('Users', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

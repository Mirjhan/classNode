'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: { len: [2, 100], notEmpty: true }
      },
      lastName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: { len: [2, 100], notEmpty: true }
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING(9),
        allowNull: true,
        validate: {
          len: [9, 9],
        }
      },
      /*isValidated: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },*/
      validationCode: {
        type: Sequelize.STRING(255)
      },
      salt: {
        type: Sequelize.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
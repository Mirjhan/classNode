'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTypeCustomer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TypeCustomers',
          key: 'id',
        }
      },
      idTypeDocument: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TypeDocuments',
          key: 'id',
        }
      }, document: {
        type: Sequelize.STRING(8),
        allowNull: false,
        validate: { len: [8, 8] }
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
      address: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: { len: [2, 200], notEmpty: true }
      },
      latitude: {
        type: Sequelize.STRING(10),
        allowNull: true,
        validate: { isNumeric: true, notEmpty: true }
      },
      longitude: {
        type: Sequelize.STRING(10),
        allowNull: true,
        validate: { isNumeric: true, notEmpty: true }
      },
      phone: {
        type: Sequelize.STRING(9),
        allowNull: true,
        validate: { len: [9, 9] }
      },
      alias: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Customers');
  }
};
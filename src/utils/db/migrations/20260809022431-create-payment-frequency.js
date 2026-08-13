'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PaymentFrequencys', {
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
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: { len: [2,100], notEmpty: true }
      },
      description: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: { len: [2,200], notEmpty: true }
      },
      recommendedPercentage: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: { min: 10, max: 100 }
      },
      monthlyInstallments: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: 1 }
      },
      daysInstallments: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 31 }
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
    await queryInterface.dropTable('PaymentFrequencys');
  }
};
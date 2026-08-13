'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Loans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCustomer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Customers',
          id: 'id'
        }
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          id: 'id'
        }
      },
      idPaymentFrequency: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PaymentFrequencys',
          id: 'id'
        }
      },
      idPaymentMethod: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PaymentMethods',
          id: 'id'
        }
      },
      idStateLoan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      percentage: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      ganancy: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      observation: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: { len: [2, 100], notEmpty: true }
      },
      evidence: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: { notEmpty: true }
      },
      numberOfInstallments: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      daysBetweenInstallments: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Loans');
  }
};
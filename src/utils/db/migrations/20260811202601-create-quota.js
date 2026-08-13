 'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Quotas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idLoan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Loans',
          id: 'id'
        }
      },
      idStateQuota: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        validate: { len: [2, 100], notEmpty: true }
      },
      description: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: { len: [2,200], notEmpty: true }
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      ganancy: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dateToPay: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      paidDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      amountDelinquency: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      isLast: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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
    // preguntas en que ambiente esta 
    // preguntes si tiene datos y si no tiene eliminas.
    await queryInterface.dropTable('Quotas');
  }
};
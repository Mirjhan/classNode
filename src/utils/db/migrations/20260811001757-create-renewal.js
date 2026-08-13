'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Renewals', {
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
      idPreviousLoan:{
        type: Sequelize.INTEGER,
      },
      idNewLoan:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idTypeRenewal: {
        type: Sequelize.CHAR(1)
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      variationInAmount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      observation: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
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
    await queryInterface.dropTable('Renewals');
  }
};
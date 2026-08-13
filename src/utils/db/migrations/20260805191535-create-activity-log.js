'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ActivityLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          id: 'id'
        }
      },
      tableName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      typeOperation: {
        type: Sequelize.CHAR(1),
        allowNull: false,
      },
      descriptionOperation: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      newRegistry: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      oldRegistry: {
        type: Sequelize.JSON,
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
    await queryInterface.dropTable('ActivityLogs');
  }
};
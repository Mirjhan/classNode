'use strict';

const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')

class ActivityLog extends Model {

  static associate(models) {
    ActivityLog.belongsTo(models.User, { foreignKey: 'id' })
  }
}

ActivityLog.init({
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      id: 'id'
    }
  },
  tableName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  typeOperation: {
    type: DataTypes.CHAR(1),
    allowNull: false,
  },
  descriptionOperation: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  newRegistry: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  oldRegistry: {
    type: DataTypes.JSON,
  },
}, {
  sequelize,
  modelName: 'ActivityLog',
  paranoid: true,
});

module.exports = ActivityLog
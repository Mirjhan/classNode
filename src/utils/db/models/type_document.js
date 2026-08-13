'use strict';

const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')

class TypeDocument extends Model {

  static associate(models) {
    TypeDocument.hasMany(models.Customer, { foreignKey: 'idTypeDocument' })
  }
}

TypeDocument.init({

  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  observation: {
    type: DataTypes.STRING(200),
    allowNull: true,
    validate: {
      notEmpty: true,
    }
  }

}, {
  sequelize,
  modelName: 'TypeDocument',
  paranoid: true,
});

module.exports = TypeDocument
'use strict';

const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')

class User extends Model {

  static associate(models) {
    // User.belongsTo(models.Type, { foreignKey: 'id' })
  }
}

User.init({
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: { len: [2, 100], notEmpty: true }
  },
  lastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: { len: [2, 100], notEmpty: true }
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING(9),
    allowNull: true,
    validate: {
      len: [9, 9],
    }
  },
  isValidated: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  validationCode: {
    type: DataTypes.STRING(255)
  },
  salt: {
    type: DataTypes.STRING(255),
  },
}, {
  sequelize,
  modelName: 'User',
  paranoid: true,
});


module.exports = User
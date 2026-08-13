'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')
  class Customer extends Model {
   
    static associate(models) {
      Customer.belongsTo(models.TypeCustomer, { foreignKey: 'idTypeCustomer',})
      Customer.belongsTo(models.TypeDocument, { foreignKey: 'idTypeDocument' })
    }
  }

  Customer.init({
    idTypeCustomer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idTypeDocument: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    document: {
      type: DataTypes.STRING(8),
      allowNull: false,
      validate: { len: [8, 8] }
    },
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
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: { len: [2, 200], notEmpty: true }
    },
    latitude: {
      type: DataTypes.STRING(10),
      allowNull: true,
      validate: { isNumeric: true, notEmpty: true }
    },
    longitude: {
      type: DataTypes.STRING(10),
      allowNull: true,
      validate: { isNumeric: true, notEmpty: true },
    },
    phone: {
      type: DataTypes.STRING(9),
      allowNull: true,
      validate: { len: [9, 9] }
    },
    alias: {
      type: DataTypes.STRING(50)
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
 module.exports = Customer;
'use strict';
const {  Model, DataTypes} = require('sequelize');
const { sequelize } = require('../connection')

  class TypeCustomer extends Model {
    
    static associate(models) {
      TypeCustomer.hasMany(models.Customer, { foreignKey: 'idTypeCustomer' })
    }
  }
  TypeCustomer.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: { notEmpty: true, }
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: { notEmpty: true, }
    },
  }, {
    sequelize,
    modelName: 'TypeCustomer',
  });
  module.exports = TypeCustomer
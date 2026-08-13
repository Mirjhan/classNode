'use strict';

const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')

class PaymentFrequency extends Model {

  static associate(models) {
    PaymentFrequency.belongsTo(models.TypeCustomer, { foreignKey: 'id' })
  }
}

PaymentFrequency.init({
  idTypeCustomer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: { len: [2, 100], notEmpty: true }
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: { len: [2, 200], notEmpty: true }
  },
  recommendedPercentage: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: { min: 10, max: 100 }
  },
  monthlyInstallments: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1 }
  },
  daysInstallments: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 31 }
  },
}, {
  sequelize,
  modelName: 'PaymentFrequency',
  paranoid: true,
});

module.exports = PaymentFrequency
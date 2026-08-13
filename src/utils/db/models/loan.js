'use strict';

const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')

class Loan extends Model {

  static associate(models) {
    Loan.belongsTo(models.Customer, { foreignKey: 'id' })
    Loan.belongsTo(models.User, { foreignKey: 'id' })
    Loan.belongsTo(models.PaymentFrequency, { foreignKey: 'id' })
    Loan.belongsTo(models.PaymentMethod, { foreignKey: 'id' })
  }
}

Loan.init({
  idCustomer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idPaymentFrequency: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idPaymentMethod: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idStateLoan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  percentage: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  ganancy: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  observation: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: { len: [2, 100], notEmpty: true }
  },
  evidence: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: { notEmpty: true }
  },
  numberOfInstallments: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  daysBetweenInstallments: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
}, {
  sequelize,
  modelName: 'Loan',
  paranoid: true,
});

module.exports = Loan
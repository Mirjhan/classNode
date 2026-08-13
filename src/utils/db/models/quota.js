'use strict';

const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')

class Quota extends Model {

  static associate(models) {
    // Quota.belongsTo(models.Type, { foreignKey: 'id' })
  }
}

Quota.init({
  idLoan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idStateQuota: {
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
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  ganancy: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dateToPay: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paidDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amountDelinquency: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isLast: {
    type: DataTypes.BOOLEAN,
    allowNull: false
}
}, {
  sequelize,
  modelName: 'Quota',
  paranoid: true,
});

module.exports = Quota
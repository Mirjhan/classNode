'use strict';

const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')

class PaymentMethod extends Model {

  static associate(models) {
    // PaymentMethod.belongsTo(models.Type, { foreignKey: 'id' })
  }
}

PaymentMethod.init({
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: { len: [2, 100], notEmpty: true },
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: { len: [2, 200], notEmpty: true },
  },
}, {
  sequelize,
  modelName: 'PaymentMethod',
  paranoid: true,
});

module.exports = PaymentMethod
'use strict';

const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')

class Renewal extends Model {

  static associate(models) {
    Renewal.belongsTo(models.User, { foreignKey: 'id' })
  }
}

Renewal.init({
  idCustomer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idPreviousLoan: {
    type: DataTypes.INTEGER,
  },
  idNewLoan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idTypeRenewal: {
    type: DataTypes.CHAR(1)
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  variationInAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  observation: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
}, {
  sequelize,
  modelName: 'Renewal',
  paranoid: true,
});

module.exports = Renewal
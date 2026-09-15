'use strict';

const { Model } = require('sequelize')

const Sequelize = require('sequelize');
const { sequelize } = require('../connection');
const TypeCustomer = require('./type_customer');
const TypeDocument = require('./type_document');
const Customer = require('./customer');
const User = require('./user');

/**
 * @type {Object.<string, typeof Model>}
 */
const db = {};

[
  User,
  TypeCustomer,
  TypeDocument,
  Customer,
]
  .forEach(model => {
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

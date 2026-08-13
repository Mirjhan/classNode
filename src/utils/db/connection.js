const { Sequelize } = require('sequelize');
const { development } = require('./config/config')
const {
  database,
  dialect,
  host,
  username,
  password,
  port,
} = development

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  logging: false,
  define: {
    timestamps: true,
    paranoid: true,
  }
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {
  connection,
  sequelize
}
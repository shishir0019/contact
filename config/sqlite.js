const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'assets/basic.sqlite'
  });

module.exports = sequelize;
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
    'Codingblocks',
    'root',
    'password', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  module.exports = sequelize;
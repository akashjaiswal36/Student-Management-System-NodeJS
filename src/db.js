const { Sequelize } = require('sequelize');
const path = require('path');

// SQLite file sits in project root (students.db)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'students.db'),
  logging: false
});

module.exports = sequelize;

const Sequelize = require('sequelize');
// const User = require('../../../app-with-sequelize/models/user');
const dbConfig = require('../config/database');
const User = require('../models/UserModel');

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;

const Sequelize = require('sequelize');
const sequelize = require("../../../connectors/sequelize/sequelize.conector");

class Users extends Sequelize.Model {}

Users.init(
  {
    id: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      allowNull: false,
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'users' }
);

module.exports = Users;
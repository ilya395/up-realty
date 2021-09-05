const Sequelize = require('sequelize');
const sequelize = require("../../../connectors/sequelize/sequelize.conector");
const { Objects } = require("../../objects");

class Statuses extends Sequelize.Model {};

Statuses.init(
  {
    id: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  // { sequelize, modelName: 'object_statuses' },
  {
    sequelize,
    modelName: "object_statuses",
    tableName: "object_statuses",
    freezeTableName: true,
  }
);

// Statuses.hasMany(Objects, {
//   foreignKey: 'status_id',
//   // sourceKey: 'id',
// });

module.exports = Statuses;
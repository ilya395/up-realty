const Sequelize = require('sequelize');
const sequelize = require("../../../connectors/sequelize/sequelize.conector");
// const { Statuses } = require("../../statuses");

class Objects extends Sequelize.Model {};

Objects.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    square: {
      type: Sequelize.INTEGER,

    },
    number: {
      type: Sequelize.INTEGER,

    },
    status_id: {
      type: Sequelize.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "realty",
    tableName: "realty",
    freezeTableName: true,
  }
);

// Objects.belongsTo(Statuses)

module.exports = Objects;
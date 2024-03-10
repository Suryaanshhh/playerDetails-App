const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Player = sequelize.define("player", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  dob: {
    type: Sequelize.STRING,
  },
  photoUrl: Sequelize.STRING,
  birthplace: {
    type: Sequelize.STRING,
  },
  noOfMatches: Sequelize.INTEGER,
  score: Sequelize.INTEGER,
  fifties: Sequelize.INTEGER,
  hundreds: Sequelize.INTEGER,
  wicket: Sequelize.INTEGER,
  Average: Sequelize.INTEGER,
});

module.exports = Player;
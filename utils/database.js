const Sequelize = require("sequelize");

const sequelize = new Sequelize("playerdb", "root", "suryansh", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
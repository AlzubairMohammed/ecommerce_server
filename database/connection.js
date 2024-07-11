const Sequelize = require("sequelize");
const initModels = require("../models/init-models.js");
const sequelize = new Sequelize("ecommerce", "root", "noPass123", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: true,
    underscored: true,
  },
});
const models = initModels(sequelize);
module.exports = { models, sequelize };

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.qottuushjalsswcefnab:hELLYEAHbORY123@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.book = require("./Model/book.model")(sequelize, DataTypes);
db.user = require("./Model/user.model")(sequelize, DataTypes);

db.sequelize.sync({ alter: false }).then(() => {
  console.log("Drop and re-sync db.");
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = db;

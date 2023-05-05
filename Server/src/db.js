require("dotenv").config();

const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

const { Sequelize } = require("sequelize");

const database = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
  { logging: false }
);

UserModel(database);
FavoriteModel(database);

const { User, Favorite } = database.models;
User.belongsToMany(Favorite, {through: "user_favorite"});
Favorite.belongsToMany(User, {through: "user_favorite"});

module.exports = {
    database,
    ...database.models
}

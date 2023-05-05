const express = require("express");
const postFavorite = require("../controllers/postFavorite");
const deleteFavorite = require("../controllers/deleteFavorite");
const favoriteRouter = express.Router();

favoriteRouter.post("/", (req, res) => {
    postFavorite(req, res);
})

favoriteRouter.delete("/:id", (req, res) => {
    deleteFavorite(req, res);
})


module.exports = favoriteRouter;
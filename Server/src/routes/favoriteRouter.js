const express = require("express");
const {postFav, deleteFav} = require("../controllers/handleFavorites");
const favoriteRouter = express.Router();

favoriteRouter.post("/", (req, res) => {
    postFav(req, res);
})

favoriteRouter.delete("/:id", (req, res) => {
    deleteFav(req, res);
})


module.exports = favoriteRouter;
const express = require("express");
const getCharById = require("../controllers/getCharById");
const characterRouter = express.Router();

characterRouter.get("/", (req, res) => {
    res.send("estoy en GET de character")
})

characterRouter.get("/:id", (req, res) => {
    getCharById(req, res)
})

module.exports = characterRouter;

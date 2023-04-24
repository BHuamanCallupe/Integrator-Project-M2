const express = require("express");
const login = require("../controllers/login")
const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
    login(req, res);
})

module.exports = loginRouter;


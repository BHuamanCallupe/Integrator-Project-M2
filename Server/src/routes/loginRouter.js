const express = require("express");
const postUser = require("../controllers/postUser")
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
    try {
        postUser(req, res);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


module.exports = loginRouter;


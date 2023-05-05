const express = require("express");
const morgan = require("morgan");
const characterRouter = require("./routes/characterRouter");
const favoriteRouter = require("./routes/favoriteRouter");
const loginRouter = require("./routes/loginRouter");

const server = express();

server.use("/", (req, res, next) => {
    console.log("inicio middleware");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(morgan("dev"));
server.use(express.json());

server.use("/rickandmorty/character", characterRouter);
server.use("/rickandmorty/favorite", favoriteRouter);
server.use("/rickandmorty/login", loginRouter);

module.exports = server
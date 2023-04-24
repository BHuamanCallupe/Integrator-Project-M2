const express = require("express");
const morgan = require("morgan");
const characterRouter = require("./routes/characterRouter");
const favoriteRouter = require("./routes/favoriteRouter");
const loginRouter = require("./routes/loginRouter");
const server = express();
const PORT = 3001;


server.use((req, res, next) => {
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
server.use("/rickandmorty", (req, res, next) => {
    console.log("rickandmorty middleware");
    next();
});

server.use("/rickandmorty/character", characterRouter);
server.use("/rickandmorty/favorite", favoriteRouter);
server.use("/rickandmorty/login", loginRouter);

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
})

// const http = require("http");
// const getCharByid = require("./controllers/getCharById")

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const { url } = req;
//     if(url.includes("/rickandmorty/character")){
//         const searchingID = url.split("/");
//         const id = Number(searchingID[searchingID.length - 1]);
//         getCharByid(res, id);
//         return;
//     }
//     res.end(null)

// }).listen(3001, "localhost")

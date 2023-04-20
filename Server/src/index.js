const http = require("http");
const fs = require("fs");
const characters = require("./utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
        const array = url.split("/");
        const characterID = Number(array[array.length - 1]);
        res.writeHead(200, { "Content-Type": "application/json" });
        const characterReturned = characters.find( character => character.id === characterID);
        res.end(JSON.stringify(characterReturned));
        return;
    } 


}).listen(3001, "localhost")
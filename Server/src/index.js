const http = require("http");
const getCharByid = require("./controllers/getCharById")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;
    if(url.includes("/rickandmorty/character")){
        const searchingID = url.split("/");
        const id = Number(searchingID[searchingID.length - 1]);
        getCharByid(res, id);
        return;
    }
    res.end(null)

}).listen(3001, "localhost")
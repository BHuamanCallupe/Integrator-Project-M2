const axios = require("axios");

const getCharByid = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            const copy = Object.assign({}, response.data)
            delete copy.type;
            delete copy.location;
            delete copy.episode;
            delete copy.url;
            delete copy.created;
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(copy))
        })
        .catch(reason => {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end(reason.message)
        })
}

module.exports = getCharByid;
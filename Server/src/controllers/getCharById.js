const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const { id } = req.params;

    axios.get(`${URL}${id}`)
        .then(response => response.data)
        .then((data) => {
            if (data.id) {
                delete data.type;
                delete data.location;
                delete data.episode;
                delete data.url;
                delete data.created;
                res.json(data);
            }
        })
        .catch(reason => {
            const { status } = reason.response;
            if (!status === 404) res.status(500).send(reason.message)
            res.status(404).send("_Not found_");
        })
}

module.exports = getCharById;
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;

    const {data} = await axios.get(`${URL}${id}`);

    if (data.id) {
      delete data.type;
      delete data.location;
      delete data.episode;
      delete data.url;
      delete data.created;
      res.status(200).json(data);
    } else {
      res.status(404).send("_Not found_");
    }
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

module.exports = getCharById;

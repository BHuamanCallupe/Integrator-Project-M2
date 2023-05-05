const {Favorite} = require("../db")

const deleteFavorite = async (req, res) => {
    const {id} = req.params;
    const favorite = await Favorite.findByPk(id);
    await favorite.destroy();
}   

module.exports = deleteFavorite;
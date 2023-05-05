const {Favorite, User} = require("../db");

const postFavorite = async(req, res) => {
    const {name, origin, status, image, species, gender} = req.body;
    try {
        if(!name || !origin || !status || !image || !species || !gender){
            res.status(401).json({message : "_Faltan datos_"});
        } else {
            const [character, created] = await Favorite.findOrCreate({
                where: {
                    name,
                    origin,
                    status,
                    image,
                    species,
                    gender
                }
            })

            if(created){
                res.status(201).json({message : "Favorito creado"});
            } else if(character.name === name){
                res.status(200).json({message : "Favorito existente"});
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postFavorite;
let myFavorites =  [];

const postFav = (req, res) => {

    if(myFavorites.length === 0) {
        myFavorites = [...myFavorites, req.body];
        res.json(req.body);
    } else if(myFavorites.find( character => character.id === req.body.id)){
        res.send("Ese personaje ya ha sido agregado.");
    } else {
        myFavorites = [...myFavorites, req.body];
        res.json(req.body);
    }

}

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter( favorite => favorite.id != id);
    res.json(id);
}

module.exports = {
    postFav,
    deleteFav, 
    myFavorites
};
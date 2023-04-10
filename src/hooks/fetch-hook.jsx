import { API_KEY, URL_BASE } from "../Const/Const.js";

export const fetch_hook = (characterID, characters = [], setcharacters = () => { }) => {
    // Cards
    Array.isArray(characters) && fetch(`${URL_BASE}/${characterID}?key=${API_KEY}`)
        .then(resp => resp.json())
        .then((data) => {
            !data.name && window.alert('¡No hay personajes con este ID!');
            if (characters.find(character => character.id === characterID)) return window.alert('¡Ya se està mostrando el personaje con este ID!');
            data.name && setcharacters([...characters, data]);
        });
    // Detail
    !Array.isArray(characters) && fetch(`${URL_BASE}/${characterID}?key=${API_KEY}`)
        .then(resp => resp.json())
        .then((data) => {
            !data.name && window.alert('¡No hay personajes con este ID!');
            data.name && setcharacters(data);
        });
    // !Array.isArray(characters) && console.log(characterID, characters, setcharacters);
}

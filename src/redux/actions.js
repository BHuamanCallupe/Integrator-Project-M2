import { API_KEY, URL_BASE } from "../Const/Const";

export const addCharacter = (characterID) =>{
    return function(dispatch){
        fetch(`${URL_BASE}/${characterID}?key=${API_KEY}`)
        .then(resp => resp.json())
        .then((data) => {
            dispatch({type: "ADD_CHARACTER", payload: data})
        });
    }
}

export const removeCharacter = (characterID) =>{
    return {
        type: "REMOVE_CHARACTER",
        payload: characterID
    }
}

export const addFav = (character) =>{
    return {
        type: "ADD_FAV",
        payload: character
    }
}

export const removeFav = (characterID) =>{
    return {
        type: "REMOVE_FAV",
        payload: characterID
    }
}

export const setCurrentCharacter = (characterID) =>{
    return function(dispatch){
        fetch(`${URL_BASE}/${characterID}?key=${API_KEY}`)
        .then(resp => resp.json())
        .then((data) => {
            dispatch({type: "CURRENT_CHARACTER", payload: data})
        });
    }
}

export const removeCurrentCharacter = () =>{
    return {
        type: "ANY_CHARACTER"
    }
}

export const onLogout = () => {
    return {
        type: "LOGOUT"
    }
}

const filterCards = (gender) => {
    return {
        type: "FILTER",
        payload: gender
    }
}

const orderCards = (orden) => { // A or D
    return {
        type: "ORDER",
        payload: orden
    }
}
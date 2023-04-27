import { API_KEY, URL_BASE } from "../Const/Const";
import axios from "axios";

export const addCharacter = (characterID) => {
  return function (dispatch) {
    fetch(`${URL_BASE}/${characterID}?key=${API_KEY}`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: "ADD_CHARACTER", payload: data });
      });
  };
};

export const removeCharacter = (characterID) => {
  return {
    type: "REMOVE_CHARACTER",
    payload: characterID,
  };
};

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/favorite";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      if (data.name) {
        dispatch({
          type: "ADD_FAV",
          payload: data,
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/favorite/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      if (data) {
        dispatch({
          type: "REMOVE_FAV",
          payload: data,
        });
      }
    } catch (error) {
        alert(error.message);
    }
  };
};

export const setCurrentCharacter = (characterID) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/rickandmorty/character/${characterID}`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: "CURRENT_CHARACTER", payload: data });
      });
  };
};

export const removeCurrentCharacter = () => {
  return {
    type: "ANY_CHARACTER",
  };
};

export const onLogin = () => {
  return {
    type: "LOGIN",
  };
};

export const onLogout = () => {
  return {
    type: "LOGOUT",
  };
};

export const getMyFavorites = () => {
  return {
    type: "GET_MY_FAVORITES",
  };
};

export const getAllFavorites = () => {
  return {
    type: "GET_ALL_FAVORITES",
  };
};

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: "ORDER",
    payload: orden,
  };
};

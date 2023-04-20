const initialState = {
    characters: [],
    currentCharacter: {},
    myFavorites: [],
    allFavorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CHARACTER":
            return {
                ...state,
                characters: [...state.characters, action.payload]
            }
        case "REMOVE_CHARACTER":
            return {
                ...state,
                characters: state.characters.filter(character => character.id !== action.payload)
            }
        case "ADD_FAV":
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allFavorites: [...state.allFavorites, action.payload]
            }
        case "REMOVE_FAV":
            return {
                ...state,
                allFavorites: state.allFavorites.filter(character => character.id !== action.payload),
                myFavorites: state.myFavorites.filter(character => character.id !== action.payload)
            }
        case "CURRENT_CHARACTER":
            return {
                ...state,
                currentCharacter: action.payload
            }
        case "ANY_CHARACTER":
            return {
                ...state,
                currentCharacter: {}
            }
        case "LOGIN":
            return {
                ...initialState,
                characters: [],
                currentCharacter: {},
                myFavorites: [],
                allFavorites: []
            }
        case "LOGOUT":
            return {
                ...initialState,
                characters: [],
                currentCharacter: {},
                myFavorites: [],
                allFavorites: []
            }
        case "GET_ALL_FAVORITES":
            return {
                ...state,
                myFavorites: [...state.allFavorites]
            }
        case "GET_MY_FAVORITES":
            return {
                ...state,
                myFavorites: [...state.myFavorites]
            }
        case "FILTER":

            if (!(action.payload === "All")) {
                state.myFavorites = [...state.allFavorites];
                return {
                    ...state,
                    myFavorites: state.allFavorites.filter(favorite => favorite.gender === action.payload)
                }
            } else {
                return {
                    ...state,
                    myFavorites: [...state.allFavorites]
                }
            }
        case "ORDER":
            console.log(action.payload);
            if (action.payload === "A") {
                let newArray = [...state.allFavorites];
                newArray.sort((a, b) => a.id - b.id);
                return {
                    ...state,
                    myFavorites: [...newArray]
                }
            } else if (action.payload === "D") {
                let newArray = [...state.allFavorites];
                newArray.sort((a, b) => b.id - a.id);
                return {
                    ...state,
                    myFavorites: [...newArray]
                }
            } else {
                return {
                    ...state,
                    myFavorites: [...state.allFavorites]
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;
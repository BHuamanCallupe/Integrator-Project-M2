const initialState = {
    characters: [],
    myFavorites: [],
    currentCharacter: {}
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
                myFavorites: [...state.myFavorites, action.payload]
            }
        case "REMOVE_FAV":
            return {
                ...state,
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
        case "LOGOUT":
            return {
                characters: [],
                myFavorites: [],
                currentCharacter: {}
            }
        case "FILTER":
            return {
                characters: [],
                myFavorites: [],
                currentCharacter: {}
            }
        case "ORDER":
            return {
                characters: [],
                myFavorites: [],
                currentCharacter: {}
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;
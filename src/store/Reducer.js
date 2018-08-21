import * as ActionTypes from "./Actions.js";

const initialState = {
    nationalId : -1,
    firstEntered: false,
    moves: null
};

export default function reducer (state = initialState, action)
{
    switch(action.type)
    {
        case ActionTypes.SUBMIT_NEW_POKEMON:
            return {
                ...state,
                nationalId: action.id,
                firstEntered: true
            };
        case ActionTypes.UPDATE_MOVES:
            return {
                ...state,
                moves: action.moves
            };
        default:
            return state;
    }

};
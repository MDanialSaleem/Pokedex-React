import * as ActionTypes from "./Actions.js";

const initialState = {
    nationalId : -1,
    showMoves : false,
    firstEntered: false
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
        case ActionTypes.SHOW_MOVES:
            return {
                ...state,
                showMoves: !state.showMoves
            };
        default:
            return state;
    }

};
import * as ActionTypes from "./Actions.js";
import list from "../data.js";

const initialState = {
    nationalId : -1,
    firstEntered: false,
    list,
    data: null,
    loading: false
};

export default function reducer (state = initialState, action)
{
    switch(action.type)
    {
        case ActionTypes.UPDATE_DATA:
            return {
                ...state,
                nationalId: action.id,
                firstEntered: true,
                data: action.data,
                loading: false
            };
        case ActionTypes.START_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }

};
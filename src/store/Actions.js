import axios from "axios";
export const UPDATE_DATA = "UPDATE_DATA";
export const START_LOADING = "START_LOADING";

export const loadNewPokemon= (id) =>
{
    return function(dispatch){
        axios.get(`https://cdn.rawgit.com/Naramsim/ninjask/master/data/api/v2/pokemon/${id}/index.json`)
        .then(response => {
            dispatch({type:UPDATE_DATA, data:response.data, id});
            console.log(response);
        });
    };
};
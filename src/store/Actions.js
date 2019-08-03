// eslint-disable-next-line no-unused-vars
import axios from "axios";
import dummy from "./dummy.js"


export const UPDATE_DATA = "UPDATE_DATA";
export const START_LOADING = "START_LOADING";

// export const loadNewPokemon = id => {
//   return function(dispatch) {
//     axios
//       .get(
//         `https://cdn.rawgit.com/Naramsim/ninjask/master/data/api/v2/pokemon/${id}/index.json`
//       )
//       .then(response => {
//         dispatch({ type: UPDATE_DATA, data: response.data, id });
//       });
//   };
// };

export const loadNewPokemon = id => {
  return dispatch => {
    dispatch({
      type: UPDATE_DATA,
      data: dummy,
      id
    });
  };
};

//What redux provides eventually is only a centralized store for managing application wide state. This store could have
//been manipulated directly by react components but that would have made the store state unpredictable. To solve
//this we introduce actions and reducers.
//React components dispatch actions. Actions are handled by reducer that changes state according to the action.
//The change of state must be synchornous.

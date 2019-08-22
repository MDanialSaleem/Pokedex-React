import React, { useReducer } from "react";
import cloneDeep from "lodash.clonedeep";
import GlobalContext from "./globalContext";
import globalReducer from "./globalReducer";
import * as ACTIONS from "./globalActons";
import dummy from "./dummy";

const GithubState = props => {
  const initialState = {
    nationalId: -1,
    firstEntered: false,
    data: null,
    loading: false
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Search Users
  // const searchUsers = async text => {
  //   setLoading();

  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  //   );

  //   dispatch({
  //     type: SEARCH_USERS,
  //     payload: res.data.items
  //   });
  // };

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

  const loadNewPokemon = id => {
    dispatch({
      type: ACTIONS.UPDATE_DATA,
      data: dummy,
      id
    });
  };

  // const loading = () => {
  //   dispatch({ type: ACTIONS.START_LOADING });
  // };

  return (
    <GlobalContext.Provider
      value={{
        ...cloneDeep(state),
        loadNewPokemon
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GithubState;

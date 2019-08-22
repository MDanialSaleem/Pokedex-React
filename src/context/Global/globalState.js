/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import axios from "axios";
import cloneDeep from "lodash.clonedeep";
import GlobalContext from "./globalContext";
import GlobalReducer from "./globalReducer";
import * as ACTIONS from "./globalActons";
import dummy from "./dummy";
import { baseUrl, pokemonBaseUrl } from "../../Util/constants";

const GithubState = props => {
  const initialState = {
    nationalId: -1,
    firstEntered: false,
    data: null,
    loading: false
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // const setLoading = () => {
  //   dispatch({ type: ACTIONS.START_LOADING });
  // };

  // const loadNewPokemon = async id => {
  //   try {
  //     setLoading();
  //     const response = await axios.get(`${baseUrl}${pokemonBaseUrl}${id}`);
  //     dispatch({ type: ACTIONS.UPDATE_DATA, data: response.data, id });
  //   } catch (error) {
  //     throw new Error("A server error occured. Please try again");
  //   }
  // };

  //this is here for development.
  const loadNewPokemon = id => {
    dispatch({
      type: ACTIONS.UPDATE_DATA,
      data: dummy,
      id
    });
  };
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

import * as ACTIONS from "./globalActons";

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_DATA:
      return {
        ...state, //this copies the old state, and then overwrite the properties that need to be mutated
        nationalId: action.id,
        firstEntered: true,
        data: action.data,
        loading: false
      };
    case ACTIONS.START_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

import * as ActionTypes from "./Actions.js";
import list from "../data.js";

//a reducer is just a function that receives two inputs, the old state, and the action that has been dispatched
//and it returns the updated state based upon the action. Reducers cannot be asynchronous which means there can
//be no HTTP calls. Only pure functions.
//Action is a javascripy object that must have the type property. Apart from this it can have any number
//and types of properties.
//When the store is updated it passed the updated state as props to all the components that have subscribed to the
//store state.
//There is always only one reducer in a redux app, even if we define multile reducers, at the end they will
//combined into one.

const initialState = {
  nationalId: -1,
  firstEntered: false,
  list,
  data: null,
  loading: false
};
//Notice that state  must be changed in an immutable manner, so if one of the properties is also a js object, it must
//also be created anew like this. One of the methods of creating a copy of an object is to use the Object.Assign()
//method, which takes two params, first: target, second: source and copies the source's properties to the target
//however this is not a deep copy. An easier way of doing this is the spread operator.
//If one of the properties of the state is an array and it needs to be updated in one of the actions, use the spread
//operator or concat method on arrays to update it immutably.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA:
      return {
        ...state, //this copies the old state, and then overwrite the properties that need to be mutated
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
}

import { combineReducers } from 'redux';

const INITIAL_STATE = {
  user: undefined,
  etat: {
    route: ""
  },
};

function monReducer (state = INITIAL_STATE, action) {
  let nextState
  switch(action.type) {

    case 'STATE':

      state.etat[action.index] = action.value;

      nextState = {
          ...state,
          etat: state.etat
      }
    return nextState;

    case 'USER':

      state.user = action.payload;

      nextState = {
          ...state,
          user: state.user
      }

    return nextState;

    //...
    default:
      return state
  }
}

export default combineReducers({
  data: monReducer
});

import { combineReducers } from 'redux';

const INITIAL_STATE = {
  user: { theme: '' },
  toast: {message: '', type: ''},
  alert: {title: '', description: '', type: '', action: {text: '', button: ()=> false}}
};

function monReducer (state = INITIAL_STATE, action) {
  let nextState
  switch(action.type) {

    case 'TOAST':

      state.toast = action.payload;

      nextState = {
          ...state,
          toast: state.toast
      }
    return nextState;

    case 'ALERT':

      state.alert = action.payload;

      nextState = {
          ...state,
          alert: state.alert
      }
    return nextState;

    case 'USERONE':

      state.user[action.key] = action.payload;

      nextState = {
          ...state,
          user: state.user
      }

    return nextState;


    case 'USER':

      state.user = { ...state.user, ...action.payload};

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

import {actionTypes} from './actionTypes'

const defaultState = {
  currentUser: null
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;

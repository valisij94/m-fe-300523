import { USER_ACTION_TYPES } from "./userActions";

const initialState = {
  username: '',
  name: ''
};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case USER_ACTION_TYPES.ADD_USERNAME : {
      return {
        ...state,
        username: action.payload
      }
    }
    case USER_ACTION_TYPES.ADD_NAME: {
      return {
        ...state,
        name: action.payload
      }
    }
    default:  return state;
  }
}

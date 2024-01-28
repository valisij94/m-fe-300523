export const USER_ACTION_TYPES = {
  ADD_USERNAME: 'USER/ADD_USERNAME',
  ADD_NAME: 'USER/ADD_NAME'
};

// Action Creator
export const addUserNameAction = (username) => {
  return {
    type: USER_ACTION_TYPES.ADD_USERNAME,
    payload: username
  }
};

export const addNameAction = (name) => {
  return {
    type: USER_ACTION_TYPES.ADD_NAME,
    payload: name
  }
};

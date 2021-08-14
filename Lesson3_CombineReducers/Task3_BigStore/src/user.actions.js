export const ADD_DATA = 'USER/ADD_DATA';
export const REMOVE_DATA = 'USER/REMOVE_DATA';

export const setUser = userData => {
  return {
    type: ADD_DATA,
    payload: { userData },
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_DATA,
  };
};

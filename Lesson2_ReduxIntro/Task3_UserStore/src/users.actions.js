export const ADD = 'USERS/ADD';
export const DEL = 'USERS/DELETE';

export const addUser = (id, name) => {
    return {
      type: ADD,
      id,
      name,
    };
  };

  export const deleteUser = (id) => {
    return {
      type: DEL,
      id,
    };
  };
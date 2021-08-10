import { ADD, DEL } from "./actions";

const initialState = {usersList: []};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD:
        return {
          ...state,
          usersList: state.usersList.concat(action.id),
        };
  
      case DEL:
        return {
          ...state,
          usersList: state.usersList.filter(user=>user.id!==action.id),
        };
  
      default:
        return state;
    }
  };

  export default userReducer;
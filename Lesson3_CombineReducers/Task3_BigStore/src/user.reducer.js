import {ADD_DATA, REMOVE_DATA} from './user.actions';

const initialState = null;

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_DATA: {
          return action.payload.userData;
        }
    
        case REMOVE_DATA: {
            return null;
          }
    
        default:
          return state;
      }
}

export default userReducer;
import { createStore, combineReducers } from 'redux';
import setLangReducer from './language.reducer';
import cartReducer from './cart.reducer';
// import usersReducer from './users.reducer.js';

const appReducer = combineReducers({
  language: setLangReducer,
  cart: cartReducer,
});

const store = createStore(appReducer);

export default store;
import { createStore, combineReducers } from 'redux';
import setLangReducer from './language.reducer';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';

const appReducer = combineReducers({
  language: setLangReducer,
  cart: cartReducer,
  user: userReducer
});

const store = createStore(appReducer);

export default store;
import store from './store.js';
import { setLanguage } from './language.actions';
import {addProduct, removeProduct} from './cart.actions';
// import { addUser, deleteUser, updateUser } from './users.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setLanguage('en'));
store.dispatch(setLanguage('ua'));
store.dispatch(setLanguage('us'));

store.dispatch(addProduct({id:10, name: 'milk'}));
store.dispatch(addProduct({id:12, name: 'bread'}));
store.dispatch(removeProduct(10));
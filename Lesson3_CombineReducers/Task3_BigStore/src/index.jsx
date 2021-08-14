import store from './store.js';
import { setLanguage } from './language.actions';
import {addProduct, removeProduct} from './cart.actions';
import { setUser, removeUser} from './user.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setLanguage('ua'));
store.dispatch(setLanguage('us'));

store.dispatch(addProduct({id:10, name: 'milk'}));
store.dispatch(addProduct({id:12, name: 'bread'}));
store.dispatch(removeProduct(10));

store.dispatch(setUser({id:56, name:'Mark'}));
store.dispatch(setUser({id:15, name:'Anni'}));
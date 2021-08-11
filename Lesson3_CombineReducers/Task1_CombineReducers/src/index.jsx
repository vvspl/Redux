import store from './store.js';
import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

store.dispatch(addUser({ id: 2, name: 'Eugen' }));
store.dispatch(addUser({ id: 10, name: 'Olya' }));
store.dispatch(deleteUser(2));
store.dispatch(updateUser(77, { name: 'Piter', age: 17 }));

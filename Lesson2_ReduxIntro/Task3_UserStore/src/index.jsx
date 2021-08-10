import store from './store'
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
    console.log(store.getState())
  })
  
  store.dispatch(addUser({ id: 10, name: 'Alex' }));
  store.dispatch(addUser({ id: 22, name: 'Boris' }));
  store.dispatch(deleteUser(22));
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bobo',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Justin',
  },
  {
    id: 'id-4',
    age: 45,
    name: 'Franklin',
  },
  {
    id: 'id-5',
    age: 45,
    name: 'John',
  },
  {
    id: 'id-6',
    age: 45,
    name: 'Andrew',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Pol',
  },
  {
    id: 'id-8',
    age: 45,
    name: 'Ron',
  },
  {
    id: 'id-9',
    age: 45,
    name: 'Harry',
  },
  {
    id: 'id-10',
    age: 45,
    name: 'Anna',
  },
];

ReactDOM.render(
  <Provider store={store}>
    <UsersList users={users} />
  </Provider>,
  rootElement,
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import Weather from './weather/Weather.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>,
  rootElement,
);

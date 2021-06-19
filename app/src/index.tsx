import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './js/re-ducks/store';
import App from './App';

const store = createStore();
export default store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

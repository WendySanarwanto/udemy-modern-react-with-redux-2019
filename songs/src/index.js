import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import combinedReducers from './reducers';

import App from './components/App';

ReactDOM.render(
  <Provider store={ createStore(combinedReducers) }>
    <App />
  </Provider>, 
  document.querySelector('#root')
);

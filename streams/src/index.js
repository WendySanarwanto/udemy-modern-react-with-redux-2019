import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import combinedReducers from './reducers';

const store = createStore(combinedReducers, applyMiddleware(thunk));

const PageOne = () => {
  return <div>Page One !</div>
}

const PageTwo = () => {
  return <div>Page Two !</div>
}

ReactDOM.render(
  <Provider store={ store }>
    <App>
      <BrowserRouter>
        <Route path="/" exact component={ PageOne } />
        <Route path="/pageTwo" component={ PageTwo } />
      </BrowserRouter>
    </App>
  </Provider>, 
document.querySelector('#root'));
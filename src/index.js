import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reportWebVitals from './reportWebVitals';
import store from './Redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

const store1 = createStore(store, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store1}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

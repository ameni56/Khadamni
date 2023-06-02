import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import mystore from './Redux/store';
import App from './App';

import {BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    
  </div>,
  document.getElementById('root')
);

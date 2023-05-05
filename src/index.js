import ReactDOM from 'react-dom';
import React from 'react';
import store from './redux/store'
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './styles/normalize.scss';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);
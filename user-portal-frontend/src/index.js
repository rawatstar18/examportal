import React from 'react';
import ReactDOM from 'react-dom'; // Use ReactDOM for React 17
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const container = document.getElementById('root');
ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();












      









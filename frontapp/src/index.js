import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
//import App from './Comp02_Condition';
//import App from './Comp03_Event';
// import App from './Comp05_Book';
// import App from './Comp06_ProductState';
// import App from './Comp07_EffectComponent';
// import App from './CustomerComponent';
//import App from './Comp08_Form_Ref';
//import App from './Comp09_Router';
import App from './Board_CustomerComponect';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

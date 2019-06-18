import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

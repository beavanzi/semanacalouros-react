import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import App from "./App.js";
import './App.css';

ReactDOM.render(
  <BrowserRouter>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </BrowserRouter>,
  document.getElementById("root")
);

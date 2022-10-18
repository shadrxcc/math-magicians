import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import './components/button.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import RouteSwitch from './RouteSwitch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  </BrowserRouter>
);

reportWebVitals();

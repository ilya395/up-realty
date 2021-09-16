import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');
const renderFunction = root.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

renderFunction( // hydrate or render
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
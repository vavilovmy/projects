import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import {getImages, results} from './data.js'
// import {AppRoute, TIMEOUT, RANDOMIZED} from './settings.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
      <App getImages={getImages} results={results}/>
  
);
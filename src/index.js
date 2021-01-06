// importing React, ReactDOM, index styling and the App component

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// telling ReactDOM, to render the App component as the root element

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')

);
// importing React, ReactDOM, createStore function, index styling, App component and the movies reducer

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";

import './index.css';
import App from './components/App';
import movies from "./reducers/index";

// creating Redux store(passing to it the movies reducer)

const store=createStore(movies);

// telling ReactDOM, to render the App component as the root element

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')

);
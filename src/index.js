// importing React, ReactDOM, createStore function, index styling, App component and the movies reducer

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";

import './index.css';
import App from './components/App';
import movies from "./reducers/index";

// creating Redux store(passing to it the movies reducer)

const store=createStore(movies);

// printing the state before and after dispatching an action to change the state

console.log("before state : ", store.getState());

store.dispatch({

  type: "ADD_MOVIES",
  movies: [{name: "Superman"}]

});

console.log("after state : ", store.getState());

// telling ReactDOM, to render the App component as the root element

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')

);
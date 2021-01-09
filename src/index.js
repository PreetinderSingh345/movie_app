// importing React, ReactDOM, createStore function, index styling, App component and the root reducer

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";

import './index.css';
import App from './components/App';
import rootReducer from "./reducers/index";

// creating Redux store(passing to it the root reducer)

const store=createStore(rootReducer);

// telling ReactDOM, to render the App component(passing it the store as props) as the root element

ReactDOM.render(

  <React.StrictMode>
    <App 
      store={store}
    />
  </React.StrictMode>,

  document.getElementById('root')

);
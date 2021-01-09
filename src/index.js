// importing React, ReactDOM, createStore and applyMiddleware function, thunk(middleware for handling actions which return a function), index styling, App component and the root reducer

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import './index.css';
import App from './components/App';
import rootReducer from "./reducers/index";

// creating the logger function(gets an object with dispatch and getState properties, next and action the arguments(curryed function), internally the logger function is called like logger(obj)(next)(action))

const logger=({dispatch, getState})=>(next)=>(action)=>{

   // printing the action type, passing the action to the next middleware(if we don't call next then the cycle will be stuck at the first action(add movies) and we'll not see any movies on the UI(as the action is not dispatched))

  // making sure that the action is not a function as in that case the action does not have a type property, but the control has to be passed to the next middleware no matter what the is type of the action(so that the cycle is not blocked)

   if(typeof(action)!="function"){
    console.log("ACTION_TYPE : ", action.type);    
   }

   next(action);

}

// creating Redux store(passing to it the root reducer and the middleware to be applied(with the logger defined above and the thunk package required above as the arguments)) 

const store=createStore(rootReducer, applyMiddleware(logger, thunk));

// telling ReactDOM, to render the App component(passing it the store as props) as the root element

ReactDOM.render(

  <React.StrictMode>
    <App 
      store={store}
    />
  </React.StrictMode>,

  document.getElementById('root')

);
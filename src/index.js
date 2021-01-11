// importing React, ReactDOM, createStore and applyMiddleware function, thunk(middleware for handling actions which return a function), index styling, App component and the root reducer

import React, { createContext } from 'react';
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

// defining and exporting storeContext(for sharing the store with the App component and all its descendants)

export const storeContext=createContext();

// defining the Provider class

class Provider extends React.Component{
  render(){

    // getting the store value from the props and providing this value inside the Provide component rendered below

    const {store}=this.props;

    // returning the Provider component of the storeContext with value as the store(this store is provided to the Comsumer callback) including all the components inside it(to be rendered)

    return (
      <storeContext.Provider value={store}>
        {this.props.children}
      </storeContext.Provider>
    );

  }
}

// telling ReactDOM, to render the App component(passing it the store as props) as the root element

ReactDOM.render(

  // wrapping the App(so that the App and all its descendants get access to the store context provider value(store in our case)) inside the Provider component(passing to it the store as props)  

  <Provider store={store}>          
      <App/>          
  </Provider>,        

  document.getElementById("root")

);
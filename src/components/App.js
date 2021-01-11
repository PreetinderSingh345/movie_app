// importing React, Navbar, MovieCard component, movies data, addMovies, setShowFavourites function and storeContext

import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import {data} from "../data";
import {addMovies} from "../actions/index";
import {setShowFavourites} from "../actions/index";
import {storeContext} from "../index"; 

// defining the App class

class App extends React.Component {  

  // component did mount function, to change the state(add movies) inside the store
  
  componentDidMount(){

    // getting the store from the props

    const {store}=this.props;

    // subscribing to the store and re-rendering the component inside its callback

    store.subscribe(()=>{      
      this.forceUpdate();
    });

    // dispatching an action to change the state inisde the store(the action object is returned via the addMovies function we're calling(for the movies data))

    store.dispatch(addMovies(data));

  }
  
  // show fav unfav function which handles which tab to show according to the tab i.e. is clicked

  showFavUnfav=(showFavourites)=>{

    // getting the store(from props) and subscribing to the store(force updating inside it to re-render the component)

    const {store}=this.props;

    const unsubscribe=store.subscribe(()=>{
      this.forceUpdate();
    });

    // dispatching an action according to the showFavourites value and unsubscribing as we'll subscribe to the store again when this event listener is called again

    store.dispatch(setShowFavourites(showFavourites));

    unsubscribe();

  }

  render(){    

    // getting the needed values from the state(via props) and setting which movies to show according to the tab selected
    
    const {list, favourites, showFavourites}=this.props.store.getState().movies;    

    const displayMovies=showFavourites? favourites: list;

    // returning the App component containing the Navbar component and the main container element(wrapping the UI to be returned inside the callback function(taking store as the argument) expected by the Consumer component of the storeContext)

    return (
      <div className="App">
      
        <Navbar/>        
  
        <div id="main-container">
  
          <div id="tab-container">
            
            <div className="tabs" id="music-tab" onClick={()=>this.showFavUnfav(false)}>Music</div>
            <div className="tabs" id="favourites-tab" onClick={()=>this.showFavUnfav(true)}>Favourites</div>
  
          </div>
  
          <div id="list">

            {displayMovies.length===0 && 
              <div id="no-favourites">
                  <span>No favourites</span>
              </div>
            }
  
            {displayMovies.map((movie)=>{
            
              return (
                <MovieCard
  
                  movie={movie}
                  key={movie.imdbID}
                  store={this.props.store}
  
                />
              );
  
            })}            
  
          </div>
  
        </div>      
  
      </div>      
    ); 

  }

}

// defining and exporting the AppWrapper class which uses the store context's Consumer component and provides the access of the store to the App component i.e. wrapped inside this AppWrapper component

class AppWrapper extends React.Component{
  render(){
    return (

      <storeContext.Consumer>
        {(store)=>(

          <App store={store}/>

        )}
      </storeContext.Consumer>

    )
  }
}

export default AppWrapper;
// importing React, Navbar, MovieCard component, movies data, addMovies, setShowFavourites and connect function

import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import {data} from "../data";
import {addMovies} from "../actions/index";
import {setShowFavourites} from "../actions/index";
// import {connect} from "../index";
import {storeContext} from "../index";

// defining the App class

class App extends React.Component {  

  // component did mount function, to change the state(add movies) inside the store
  
  componentDidMount(){

    // dispatching an action to change the state inisde the store(the action object is returned via the addMovies function we're calling(for the movies data))
    
    this.props.store.subscribe(()=>{
      this.forceUpdate();
    });

    this.props.store.dispatch(addMovies(data));

  }
  
  // show fav unfav function which handles which tab to show according to the tab i.e. is clicked

  showFavUnfav=(showFavourites)=>{

    // dispatching an action according to the showFavourites value and unsubscribing as we'll subscribe to the store again when this event listener is called again

    this.props.store.dispatch(setShowFavourites(showFavourites));

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

// defining the callback function which tells what data the connect function has to get from the store(we return an object containing movies and search properties with values taken from the root state object of redux)

// function mapStateToProps(state){
//   return {

//     movies: state.movies,
//     search: state.search

//   }
// }

// calling the connect function, providing to it the above callback(map state to props function), receiving the returned data as props for the App component, getting the returned component from the connect function inside connectedComponent and exporting it

// const connectedComponent=connect(mapStateToProps)(App);

class AppWrapper extends React.Component{
  render(){
    return (
      <storeContext.Consumer>
        {(store)=>(
          <App store={store}/>
        )}
      </storeContext.Consumer>
    );
  }
}

export default AppWrapper;
// importing React, Navbar, MovieCard component, movies data and addMovies function

import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import {data} from "../data";
import {addMovies} from "../actions/index";

// defining and exporting the App class

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

  render(){

    // getting the state array containing the movies from the props

    const movies=this.props.store.getState();

    // returning the App component containing the Navbar component and the main container element

    return (
      <div className="App">
       
        <Navbar />
  
        <div id="main-container">
  
          <div id="tab-container">
            
            <div className="tabs" id="music-tab">Music</div>
            <div className="tabs" id="favourites-tab">Favourites</div>
  
          </div>
  
          <div id="list">
  
            {movies.map((movie)=>{
  
              return (
                <MovieCard
  
                  movie={movie}
                  key={movie.imdbID}
  
                />
              );
  
            })}
  
          </div>
  
        </div>      
  
      </div>
    );

  }

}

export default App;
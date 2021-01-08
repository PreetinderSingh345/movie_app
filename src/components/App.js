// importing React, Navbar, MovieCard component, movies data and addMovies function

import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import {data} from "../data";
import {addMovies} from "../actions/index";

// defining and exporting the App class

class App extends React.Component {

  // defining the constructor function

  constructor(){

    super();

    this.state={
      showFavourite: false
    };

  }

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
  
  showFavUnfav=(showFav)=>{

    this.setState({
      showFavourite: showFav
    });

  }

  render(){
    
    // getting the list array containing the movies from the state object via props
    
    let {list}=this.props.store.getState();
    let {favourites}=this.props.store.getState();

    if(this.state.showFavourite){
      list=favourites;
    }

    // returning the App component containing the Navbar component and the main container element

    return (
      <div className="App">
       
        <Navbar />
  
        <div id="main-container">
  
          <div id="tab-container">
            
            <div className="tabs" id="music-tab" onClick={()=>this.showFavUnfav(false)}>Music</div>
            <div className="tabs" id="favourites-tab" onClick={()=>this.showFavUnfav(true)}>Favourites</div>
  
          </div>
  
          <div id="list">
  
            {list.map((movie)=>{
            
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

export default App;
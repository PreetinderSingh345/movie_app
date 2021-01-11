// importing React , handleMovieSearch, addMovieToList function and fontawesome icons

import React from "react";

import {handleMovieSearch, addMovieToList} from "../actions/index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Navbar class

class Navbar extends React.Component{

    // defining the constructor function(with argument as props, calling the super constructor and defining the state inside it)

    constructor(props){

        super(props);

        this.state={
            searchText: ""            
        }

    }

    // handling the event when the search input changes

    handleChange=(event)=>{

        // changing the search text value in the state

        this.setState({
            searchText: event.target.value
        });

    }

    // handling the event when the search button is clicked

    handleSearch=()=>{

        // getting the searchText and dispatching an action to handle the movie search for the search text

        const {searchText}=this.state;

        this.props.store.dispatch(handleMovieSearch(searchText));
        
    }

    handleAddToList=(movie)=>{  
        this.props.store.dispatch(addMovieToList(movie));
    }

    render(){

        const {result: movie, showSearchResults}=this.props.store.getState().search;

        return (

            // navbar

            <div id="navbar">

                {/* search container */}

                <div id="search-container">

                    {/* added on change and click event lisnteners to the search input and button element */}

                    <input type="text" id="search-input" placeholder="Enter movie name..." onChange={this.handleChange}/>

                    <button id="search-button" onClick={this.handleSearch}>
                        
                        <FontAwesomeIcon icon={faSearch} id="search-icon"/>
                        <span id="search-content">Search</span>   
                        
                    </button>                    

                </div>

                {/* showing the search results when the search button is pressed and a button and its event listener(to add the movie to the list) are also added */}

                {showSearchResults && 

                    <div id="show-search-results">
                        <div id="search-result">

                            <div id="search-img-container">
                                <img src={movie.Poster} alt="poster"/>
                            </div>

                            <div id="search-result-info-button">

                                <span id="search-result-heading">{movie.Title}</span>

                                <button id="add-to-movies-button" onClick={()=>this.handleAddToList(movie)}>
                                    
                                    <FontAwesomeIcon icon={faPlus}/>                                    
                                    <span>to movies</span>

                                </button>

                            </div>

                        </div>
                    </div>

                }

            </div>

        );
    }

}

export default Navbar;
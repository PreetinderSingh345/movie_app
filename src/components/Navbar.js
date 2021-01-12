// importing React , handleMovieSearch, addMovieToList, hideSearchResults, connect function and fontawesome icons

import React from "react";

import {handleMovieSearch, addMovieToList, hideSearchResults} from "../actions/index";
import {connect} from "../index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { search } from "../reducers";

// defining the Navbar class

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

        this.props.dispatch(handleMovieSearch(searchText));
        
    }

    // handling the event when the add to movies button is clicked

    handleAddToList=(movie)=>{  

        // dispatching an action to add the selected movie to the list

        this.props.dispatch(addMovieToList(movie));

    }

    // handling the event when the x button is clicked(to hide the search results)

    hideSearchResults=()=>{

        // dispatching an action to hide the search results

        this.props.dispatch(hideSearchResults());

    }

    render(){

        // getting the needed values from props

        const {result: movie, showSearchResults}=this.props.search;

        return (

            // navbar

            <div id="navbar">

                {/* search container */}

                <div id="search-container">

                    {/* added on change and click event lisnteners to the search input and button element */}

                    <input type="text" id="search-input" placeholder="Enter movie name..." onChange={(event)=>this.handleChange(event)}/>

                    <button id="search-button" onClick={this.handleSearch}>
                        
                        <FontAwesomeIcon icon={faSearch} id="search-icon"/>
                        <span id="search-content">Search</span>   
                        
                    </button>                    

                </div>

                {/* showing the search results when the search button is pressed and a button and its event listener(to add the movie to the list) are also added */}                

                {showSearchResults &&                     

                    <div id="show-search-results">

                        {movie.Title==undefined?
                            <div id="no-results">Couldn't find anything</div>
                        :
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
                        }       

                        <div id="close-search" onClick={this.hideSearchResults}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </div>

                    </div>

                }

            </div>

        );
    }

}


// defining the mapStateToProps function

function mapStateToProps(state){
    return {

        search: search

    }
}

// defining and exporting the connected component

const connectedComponent=connect(mapStateToProps)(Navbar);

export default connectedComponent;
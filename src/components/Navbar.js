// importing React , handleMovieSearch function and fontawesome icons

import React from "react";

import {handleMovieSearch} from "../actions/index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Navbar class

class Navbar extends React.Component{

    // defining the constructor function(with argument as props, calling the super constructor and defining the state inside it)

    constructor(props){

        super(props);

        this.state={

            searchText: "",
            showSearchResults: false

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

    render(){
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

            </div>

        );
    }

}

export default Navbar;
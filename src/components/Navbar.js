// importing React and fontawesome icons

import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Navbar class

class Navbar extends React.Component{

    render(){
        return (

            // navbar

            <div id="navbar">

                {/* search container */}

                <div id="search-container">

                    <input type="text" id="search-input" placeholder="Enter movie name..."/>

                    <button id="search-button">
                        
                        <FontAwesomeIcon icon={faSearch} id="search-icon"/>
                        <span id="search-content">Search</span>   
                        
                    </button>

                </div>

            </div>

        );
    }

}

export default Navbar;
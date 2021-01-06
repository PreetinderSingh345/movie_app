// importing React

import React from "react";

// defining and exporting the Navbar class

class Navbar extends React.Component{

    render(){
        return (

            // navbar

            <div id="navbar">

                {/* search container */}

                <div id="search-container">

                    <input type="text" id="search-input" placeholder="Enter movie name..."/>
                    <button id="search-button">Search</button>

                </div>

            </div>

        );
    }

}

export default Navbar;
// importing React, data, Navbar and MovieCard component

import React from "react";
import {data} from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

// defining and exporting the app function, containing the navbar and the main-container inside the App component

function App() {
  return (
    <div className="App">
     
      <Navbar />

      <div id="main-container">

        <div id="tab-container">
          
          <div className="tabs" id="music-tab">Music</div>
          <div className="tabs" id="favourites-tab">Favourites</div>

        </div>

        <div id="list">

          {data.map((movie)=>{

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

export default App;
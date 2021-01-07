// importing React and fontawesome icons

import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faImage } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the MovieCard class

class MovieCard extends React.Component{

    render(){

        // getting the movie object from props

        const {movie}=this.props;

        return (

            // movie card

            <div className="movie-card">

                {/* movie image container, containing the movie poster */}
                
                <div className="movie-img-container">

                    <img className="movie-img" src={movie.Poster} alt="movie-poster"/>
                    <FontAwesomeIcon icon={faImage} className="movie-icon-button"/>

                </div>

                {/* movie description container, containing movie information and favourites button */}

                <div className="movie-description-container">

                    <div className="movie-title-genre-production">
                        <div className="movie-title">{movie.Title}</div>
                        <div className="movie-genre">{movie.Genre}</div>
                        <div className="movie-production">by {movie.Production}</div>
                    </div>                    

                    <div className="movie-description">{movie.Plot}</div>

                    <div className="movie-rating-favourites">

                        <div className="movie-rating">IMDB {movie.imdbRating}</div>
                        <button className="favourites-button">Add to favourites</button>
                        <button className="favourites-icon-button"><FontAwesomeIcon icon={faHeart}/></button>

                    </div>

                </div>

            </div>

        );
    }

}

export default MovieCard;
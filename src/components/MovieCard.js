// importing React

import React from "react";

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
                    <img src={movie.Poster} alt="movie-poster"/>
                </div>

                {/* movie description container, containing movie information */}

                <div className="movie-description-container">

                    <div className="movie-title">{movie.Title}</div>
                    <div className="movie-genre">{movie.Genre}</div>
                    <div className="movie-production">by {movie.Production}</div>
                    <div className="movie-description">{movie.Plot}</div>

                    <div className="movie-rating-favourites">

                        <div className="movie-rating">IMDB {movie.imdbRating}</div>
                        <button className="favourites-button">Add to favourites</button>

                    </div>

                </div>

            </div>

        );
    }

}

export default MovieCard;
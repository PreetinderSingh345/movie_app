// importing React and fontawesome icons

import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faImage, faTimes } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the MovieCard class

class MovieCard extends React.Component{

    // defining the constructor function and a countIcon variable inside it(number of times the show image icon has been clicked)

    constructor(){

        super();
        this.countIcon=0;

    }

    // show image function, to handle the case when show/close image icon is clicked

    showImage=(imdbID)=>{

        // getting the icons, image container and image elements
    
        let imageIcon=document.getElementById(`movie-image-icon-${imdbID}`);
        let closeIcon=document.getElementById(`movie-close-icon-${imdbID}`);

        let imageContainer=document.getElementById(`movie-image-container-${imdbID}`);
        let image=document.getElementById(`movie-poster-${imdbID}`);

        // showing the enlarged image when the count is even and removing the extra styles when the close button is clicked i.e. count is odd

        if(this.countIcon%2==0){

            imageIcon.style.display="none";
            closeIcon.setAttribute("style", "display: inline-block; top: 5px; right: 5px;");

            imageContainer.setAttribute("style", "display: block; top: 10px; right: 10px; height: 200px; width: 135px;");
            image.style.display="inline-block"

        }
        else{

            imageIcon.removeAttribute("style");            
            closeIcon.removeAttribute("style");
            imageContainer.removeAttribute("style");
            image.removeAttribute("style");

        }

        // incrementing count

        this.countIcon++;

    }

    render(){

        // getting the movie object from props

        const {movie}=this.props;

        return (

            // movie card

            <div className="movie-card">

                {/* movie image container, containing the movie poster */}

                <div className="movie-img-container" id={`movie-image-container-${movie.imdbID}`}>

                    <img className="movie-img" src={movie.Poster} alt="movie-poster" id={`movie-poster-${movie.imdbID}`}/>

                    {/* calling showImage event listener when the movie icon/close button is clicked */}

                    <FontAwesomeIcon icon={faImage} className="movie-icon-button" id={`movie-image-icon-${movie.imdbID}`} onClick={()=>this.showImage(movie.imdbID)}/>

                    <FontAwesomeIcon icon={faTimes} className="movie-close-button" id={`movie-close-icon-${movie.imdbID}`} onClick={()=>this.showImage(movie.imdbID)}/>

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
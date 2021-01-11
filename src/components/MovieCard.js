// importing React, addFavourite, removeFavourite function and fontawesome icons

import React from "react";
import {addFavourite} from "../actions/index";
import {removeFavourite} from "../actions/index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken, faImage, faTimes } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the MovieCard class

class MovieCard extends React.Component{

    // defining the constructor function with countIcon and countFav variables inside it(number of times the show image icon and favourite/unfavourite button has been clicked respectively)

    constructor(){

        super();

        this.countIcon=0;
        this.countFav=0;

    }

    // show image function, to handle the case when show/close image icon is clicked

    showImage=(imdbID)=>{

        // getting the icons, image container and image elements
    
        let imageIcon=document.getElementById(`movie-image-icon-${imdbID}`);
        let closeIcon=document.getElementById(`movie-close-icon-${imdbID}`);

        let imageContainer=document.getElementById(`movie-image-container-${imdbID}`);
        let image=document.getElementById(`movie-poster-${imdbID}`);

        // showing the enlarged image when the count is even and removing the extra styles when the close button is clicked i.e. count is odd

        if(this.countIcon%2===0){

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

    // handle fav unfav click function to handle the clicking of the favourite or unfavourite button

    handleFavUnfavClick=(imdbID)=>{
        
        // getting the favourite button

        let favouriteButton=document.getElementById(`favourites-button-${imdbID}`);    

        // changing the button content and style if the the count is even and undoing the changes when the count is odd

        if(this.countFav%2===0){

            favouriteButton.innerText="Unfavourite";        
            favouriteButton.style.backgroundColor="rgb(255, 100, 100)";
            
        }
        else{

            favouriteButton.innerText="Add to favourites";
            favouriteButton.removeAttribute("style");

        }        

        // getting the movie and the store from props

        const {movie, store}=this.props;

        // subscribing to the store to listen to the changes(force updating inside it to cause a re-render) in the state after an action to add/remove a movie as favourite is dispatched below        

        const unsubscribe=store.subscribe(()=>{
            this.forceUpdate();
        });                

        // adding/removing the movie to/from the favourites according to the count value

        if(this.countFav%2===0){
            store.dispatch(addFavourite(movie));
        }
        else{
            store.dispatch(removeFavourite(movie));
        }          

        // unsubscribing to the store to listen to the changes in the state as we're going to subscribe again when this event listener is called again(so that unmounted components are not updated)

        unsubscribe();        

        this.countFav++;

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
                        <div className="movie-title thin-scrollbar">{movie.Title}</div>
                        <div className="movie-genre">{movie.Genre}</div>
                        <div className="movie-production">by {movie.Production}</div>
                    </div>                    

                    <div className="movie-description thin-scrollbar">{movie.Plot}</div>

                    <div className="movie-rating-favourites">

                        <div className="movie-rating">IMDB {movie.imdbRating}</div>

                        <button className="favourites-button" id={`favourites-button-${movie.imdbID}`} onClick={()=>this.handleFavUnfavClick(movie.imdbID)}>Add to favourites</button>

                        {/* showing the relevant button according to countFav value */}

                        { this.countFav%2===0? 
                        
                            <button className="favourites-icon-button fav-unfav-icon-button" id={`favourites-icon-button-${movie.imdbID}`} onClick={()=>this.handleFavUnfavClick(movie.imdbID)}><FontAwesomeIcon icon={faHeart}/></button>

                        : 
                        
                            <button className="unfavourite-icon-button fav-unfav-icon-button" id={`unfavourite-icon-button-${movie.imdbID}`} onClick={()=>this.handleFavUnfavClick(movie.imdbID)}><FontAwesomeIcon icon={faHeartBroken}/></button>
                        
                        }                                                
                                                

                    </div>

                </div>

            </div>

        );
    }

}

export default MovieCard;
// defining and exporting the action types(used for comparison inside the reducer function)

export const ADD_MOVIES="ADD_MOVIES";
export const ADD_FAVOURITE="ADD_FAVOURITE";
export const REMOVE_FAVOURITE="REMOVE_FAVOURITE";  
export const SET_SHOW_FAVOURITES="SET_SHOW_FAVOURITES";

// defining and exporting the action creators(return the action object used as dispatch argument)

export const addMovies=function(data){
    return {

        type: ADD_MOVIES,
        movies: data

    }
}

export const addFavourite=function(movie){
    return {

        type: ADD_FAVOURITE,
        movie: movie

    }
}

export const removeFavourite=function(movie){
    return {

        type: REMOVE_FAVOURITE,
        movie: movie

    }
}

export const setShowFavourites=function(showFavourites){
    return {

        type: SET_SHOW_FAVOURITES,
        showFavourites: showFavourites

    }
}

export const handleMovieSearch=function(searchText){

    // getting the url at which the api call to get the searh result has to be made

    const url=`http://www.omdbapi.com/?apikey=7381b178&t=${searchText}`;

    // returning a function(not an object), whcih fetches the response, convertes it to json and then prints the movie obtained through the response

    return function(dispatch){

        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((movie)=>{
            
            console.log("movie", movie);

            // the action to add search result will be dispatched here(through the above dispatch argument)

        });

    }
    
}
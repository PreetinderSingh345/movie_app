// defining and exporting the action types(used for comparison inside the reducer function)

export const ADD_MOVIES="ADD_MOVIES";
export const ADD_FAVOURITE="ADD_FAVOURITE";

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
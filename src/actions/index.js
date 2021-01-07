// defining and exporting the action types(used for comparison inside the reducer function)

export const ADD_MOVIES="ADD_MOVIES";

// defining and exporting the action creator(returns the action object used as dispatch argument)

export const addMovies=function(data){
    return {

        type: ADD_MOVIES,
        movies: data

    }
}
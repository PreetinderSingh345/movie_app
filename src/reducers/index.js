// importing the ADD_MOVIES and ADD_FAVOURITE action type

import {ADD_MOVIES, ADD_FAVOURITE} from "../actions/index";

// defining the initial movie state object(consisting of a list and a favourites array)

const initialMovieState={

    list: [],
    favourites: []

}

// defining and exporting the movies reducer function(consisting of the current state(initialized to initial movie state(default argument)) and the action as the arguments)

export default function movies(state=initialMovieState, action){

    // matching the action type and returning the new state(we return the previous state as the default case)

    switch(action.type){

        // updating the list of movies with those coming from the action

        case ADD_MOVIES:
            return {

                ...state,
                list: action.movies

            }

        // adding the selected favourite movie to the front of the favourites array of the state
        
        case ADD_FAVOURITE:
            return {

                ...state,
                favourites: [action.movie, ...state.favourites]

            }

        default: 
            return state;

    }

}
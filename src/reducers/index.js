// importing the ADD_MOVIES action type

import {ADD_MOVIES} from "../actions/index";

// defining the initial movie state object(consisting of a list and a favourites array)

const initialMovieState={

    list: [],
    favourites: []

}

// defining and exporting the movies reducer function(consisting of the current state(initialized to initial movie state(default argument)) and the action as the arguments)

export default function movies(state=initialMovieState, action){

    // matching the action type and returning the new state

    if(action.type==ADD_MOVIES){
        return {

            ... state,
            list: action.movies
           
        }
    }

    // we return the previous state, if the action type does not match with any of the above compared values

    return state;

}
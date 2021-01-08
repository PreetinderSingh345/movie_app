// importing the ADD_MOVIES ,ADD_FAVOURITE, REMOVE_FAVOURITE action type

import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE} from "../actions/index";

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

        // removing the selected movie from the favourites array of the state

        case REMOVE_FAVOURITE: 

            // getting the favourites array of the state and the movie to be removed from the array

            let favourites=state.favourites;
            let movie=action.movie;

            // removing the movie from the favourites array

            for(let i=0;i<favourites.length;i++){
                if(favourites[i]==movie){
                    
                    favourites.splice(i, 1);                                    
                    break;

                }
            }

            // returning the new state
            
            return {

                ...state,
                favourites: favourites

            }

        default: 
            return state;

    }

}
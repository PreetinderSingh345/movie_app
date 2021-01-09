// importing the ADD_MOVIES ,ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES action types and the combineReducer method

import {

    ADD_MOVIES, 
    ADD_FAVOURITE, 
    REMOVE_FAVOURITE, 
    SET_SHOW_FAVOURITES

} from "../actions/index";

import {combineReducers} from "redux";

// defining the initial movie state object(consisting of a list and favourites array and showFavourites value)

const initialMovieState={

    list: [],
    favourites: [],
    showFavourites: false

}

// defining and exporting the movies reducer function(consisting of the current state(initialized to initial movie state(default argument)) and the action as the arguments)

export function movies(state=initialMovieState, action){

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
                if(favourites[i]===movie){
                    
                    favourites.splice(i, 1);                                    
                    break;

                }
            }

            // returning the new state
            
            return {

                ...state,
                favourites: favourites

            }

        // changing the show favourites value according to the tab selected

        case SET_SHOW_FAVOURITES:

            return {

                ...state,
                showFavourites: action.showFavourites

            }

        default: 
            return state;

    }

}

// defining the initial search state object(consisting of a result property)

const initialSearchState={
    result: {}
};

// defining and exporting the search reducer function(consists of the state(set to initialSearchState(default argument)) and an action as the arguments)

export function search(state=initialSearchState, action){
    return state;
}

// defining and exporting the combine reducers function(takes an object of the combined state type and the reducers associated with each property, internal functioning is like the previously defined root reducer only and we can use the shortcut of writing only the property or value as both of them are having the same name)

export default combineReducers({

    movies: movies,
    search: search

});
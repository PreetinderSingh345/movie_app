// importing the ADD_MOVIES ,ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES action types

import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES} from "../actions/index";

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

// defining the initial root state object(consists of the movies and search properties, which have values as the respective initial state objects defined for them above)

const initialRootState={

    movies: initialMovieState,
    search: initialSearchState

};

// defining and exporting the root reducer function(consists of the state(default argument, initialized to the above state) and action as the arguments) and this is the default export in this file(we can have only one default export in a file)

export default function rootReducer(state=initialRootState, action){

    // returns the new state object after the changes have been made by the above reducers in the respective objects i.e. movies and search(the respective states have been passed to the below reducers, it will work even if we pass the complete state object as the needed properties will be filtered)

    return {

        movies: movies(state.movies, action),
        search: search(state.search, action)

    }

}
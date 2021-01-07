// defining and exporting the movies reducer function(consisting of the current state(initialized to an empty array, if the state passed is not an array(default argument)) and the action as the arguments)

export default function movies(state=[], action){

    // matching the action type and returning the new state

    if(action.type=="ADD_MOVIES"){
        return action.movies;
    }

    // we return the previous state, if the action type does not match with any of the above compared values

    return state;

}
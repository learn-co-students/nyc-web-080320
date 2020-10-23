import { combineReducers } from 'redux'

let defaultState = {
    user: null,
    api: [],
    counter: 0
}

// payload === data

function apiReducer(state = defaultState.api, action) {
    // return the value of the api key in our state
    switch (action.type) {
        case "GET_DOGS":
            console.log("in reducer")
            return action.payload
            break;
        default:
            return state
            break;
    }
}

function userReducer(state = defaultState.user, action) {
    // return the value of the api key in our state
    switch (action.type) {
        case "LOG_IN":
            return action.payload
            break;
        default:
            return state
            break;
    }
}

let rootReducer = combineReducers({
    user: userReducer,
    api: apiReducer
})

export default rootReducer








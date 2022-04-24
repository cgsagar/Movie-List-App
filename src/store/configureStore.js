import { createStore, combineReducers } from 'redux'

import moviesReduces from '../reducers/moviesReducer'


export const saveToLocalStorage = (state) => {
    const serialisedState = JSON.stringify(state);
    console.log(serialisedState)
    localStorage.setItem("persistantState", serialisedState);
}

// load string from localStarage and convert into an Object
export const loadFromLocalStorage = () => {
    const serialisedState = localStorage.getItem("persistantState") || []
    console.log(serialisedState)
    return JSON.parse(serialisedState);
}

const configureStore = () => {
    const store = createStore(combineReducers({
        movies: moviesReduces
    }), loadFromLocalStorage())
    return store
}

export default configureStore
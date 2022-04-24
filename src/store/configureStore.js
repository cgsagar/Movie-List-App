import { createStore, combineReducers } from 'redux'

import moviesReduces from '../reducers/moviesReducer'


export const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}


// export const saveToLocalStorage = (state) => {
//     const serialisedState = JSON.stringify(state);
//     console.log(serialisedState)
//     localStorage.setItem("persistantState", serialisedState);
// }

// load string from localStarage and convert into an Object
export const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const configureStore = () => {
    const store = createStore(combineReducers({
        movies: moviesReduces
    }), loadFromLocalStorage())
    return store
}

export default configureStore
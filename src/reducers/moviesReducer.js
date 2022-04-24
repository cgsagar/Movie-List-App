const moviesInitialState = []

const moviesReduces = (state = moviesInitialState, action) => {
    switch(action.type) {
        case 'ADD_MOVIE' : {
            return [...state, {...action.payload}]
        }
        case 'DELETE_MOVIE' : {
            return state.filter((ele) => ele.id !== action.payload)
        } 
        default: {
            return state
        }
    }
}

export default moviesReduces
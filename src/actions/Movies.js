export const addMovies = (movie) => {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}

export const deleteMovie = (id) => {
    return {
        type: 'DELETE_MOVIE',
        payload: id
    }
}
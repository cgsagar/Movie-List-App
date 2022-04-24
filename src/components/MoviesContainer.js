import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import MoviesForm from './MoviesForm'
import MoviesStats from './MoviesStats'

const MoviesContainer = (props) => {
    const movies = useSelector((state) => {
        return state.movies
    })
    return (<div>
        <div className='row border border-warning shadow-sm rounded px-4 py-3 my-3 bg-white'>
            <div className='col-md-8'>
                <MoviesList movies={movies}/></div>
            <div className='col-md-4'>
                <MoviesForm />
                <MoviesStats movies={movies}/>    
            </div>
        </div>
        
        
        
    </div>)
}

export default MoviesContainer 
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMovie } from '../actions/Movies'
import placeholderImage from '../assets/video-movie-placeholder-image.png'

//let placeholderImage = require('../../public/video-movie-placeholder-image.png')


const MoviesCard = (props) => {
    const dispatch = useDispatch()
    const { id, name, rank } = props

    const handleDelete = (id) => {
        dispatch(deleteMovie(id))
    }

    return (< >
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0 ">
                <div className="col-md-4">
                    <img src={placeholderImage} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"># {rank}</p>
                        <div className='d-flex flex-row-reverse'>
                            <button type="button" className='btn btn-danger'><i className="bi bi-trash" onClick={() => handleDelete(id)} style={{ color: 'white' }}></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default MoviesCard 
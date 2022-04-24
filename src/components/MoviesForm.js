import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovies } from '../actions/Movies'

const MoviesForm = (props) => {
    const [name, setName] = useState('')
    const [rank, setRank] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const attr = e.target.name
        if (attr === 'name') {
            setName(e.target.value)
        } else if (attr === 'rank') {
            setRank(e.target.value)
        }
    }

    const runValidations = () => {
        if (name.trim().length == 0) {
            errors.name = 'Movie name cannot be blank'
        }
        if (rank.trim().length === 0) {
            errors.rank = 'idmb cannot be blank'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations();

        if (Object.keys(errors).length == 0) {
            setFormErrors({})
            const formData = {
                id: Number(new Date()),
                name: name,
                rank: rank
            }
            dispatch(addMovies(formData))
            setName('')
            setRank('')
        } else {
            console.log('form errors', errors)
            setFormErrors(errors)
        }
        //console.log('formData', formData)
    }
    return (<div>
        <h4 className=''>Add Movie</h4>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={name} onChange={handleChange} placeholder='Enter Movie Name' className='form-control form-control-sm' />
            {formErrors.name && <span style={{ fontSize: "14px", color: "red" }}>{formErrors.name}</span>}

            <br />
            <input type='number' name='rank' value={rank} onChange={handleChange} placeholder='IMDB Ranking' className='form-control form-control-sm' />
            {formErrors.rank && <span style={{ fontSize: "14px", color: "red" }}>{formErrors.rank}</span>}

            <br />
            <input type='submit' value='Add' className='btn btn-primary btn-sm w-25 mt-3' />
        </form>
    </div>)
}

export default MoviesForm 
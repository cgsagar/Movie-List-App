import React, { useState } from 'react'
import MoviesCard from './MovieCard'

const MoviesList = ({movies}) => {
    const [searchBox, setSearchBox] = useState('')
    const [orderBy, setOrderBy] = useState('')
    

    const handleChange = (e) => {
        const searchTerm = e.target.value
        setSearchBox(searchTerm.toLowerCase())
        console.log(searchTerm)
    }

    //filter movie by Search
    const filterMovie = () => {
        return movies.filter((movie) => {
            return movie.name.toLowerCase().includes(searchBox)
        })
    }
    const handleOrderChange = (e) => {
        //console.log(e.target.value)
        const inputVal = e.target.value
        setOrderBy(inputVal)
        if(inputVal === 'a-z') {
            //alert('ascending')
            return movies.sort((a,b) => a.name.localeCompare(b.name))
            
        } else if(inputVal === 'z-a'){
           return movies.sort((a,b) => b.name.localeCompare(a.name))
            //alert('descending')
        } else if(inputVal === '1-100') {
            return movies.sort((a,b) => a.rank - b.rank)
        } else if(inputVal === '100-1') {
            return movies.sort((a,b) => b.rank - a.rank)
        }
    }
    // const sortAscending = () => {
    //     return filterMovie().sort((a, b) => a.name - b.name)
    // }
    
    // const sortDescending = () => {
    //     return filterMovie().sort((a, b) => a.name - b.name).reverse()
    // }
    
    
    //console.log(filterMovie())
    return (<div>
        <h4>Movies List - {filterMovie().length}</h4>
        <div className='d-flex justify-content-between mt-2 mb-4'>
            <input type='text' name='searchBox' value={searchBox} onChange={handleChange} placeholder='Search By Name ' className='form-control form-control-sm w-50'/>
            <select value={orderBy} onChange={handleOrderChange} className='form-select form-select-sm w-25'>
                <option>OrderBy</option>
                <option value='a-z'>A-Z</option>
                <option value='z-a'>Z - A</option>
                <option value='1-100'>1 - 100</option>
                <option value='100-1'>100 - 1</option>
            </select>
        </div>
        {
            filterMovie().length > 0 ? (
                <>
                    { filterMovie().map((ele) => {
                        return <MoviesCard key={ele.id} {...ele}/>
                    })}
                </>
            ) : (
                <h6 style={{color:'red'}}>No Records found</h6>
            )
        }
        
    </div>)
}

export default MoviesList 
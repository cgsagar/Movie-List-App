import React, { useEffect } from 'react'

const MoviesStats = ({movies}) => {
    

    const topRated = (movies) => {
        let topMovie = movies[0]
        movies.forEach((ele) => {
            if(ele.rank < topMovie.rank ) {
                topMovie = ele
            }
        })
        return topMovie

    }
    const top = topRated(movies)
    
    return (<div>
        <div className="card text-dark bg-light my-3" >
            <div className="card-header">Movies Stats</div>
            <div className="card-body">
                <h5 className="card-title">Total Movies - {movies.length}</h5>
                {movies.length > 0 && <h6 className="card-text"># Top Rated Movie - {top.name} - # {top.rank}
                </h6>}
            </div>
        </div>
    </div>)
}

export default MoviesStats 
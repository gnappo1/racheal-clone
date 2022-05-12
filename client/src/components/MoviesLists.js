import React from 'react'
import MoviesCard from './MoviesCard'

function MoviesLists({movies, deleteMovie}) {
    const renderMovies = movies.map(movie => <MoviesCard key={movie.id} movie={movie} deleteMovie={deleteMovie}/>)
  return (
    <div>{renderMovies}</div>
  )
}

export default MoviesLists
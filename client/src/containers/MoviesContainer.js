import {useState, useEffect} from 'react'
import MoviesLists from '../components/MoviesLists';
import "../components/styles.css"

function MoviesContainer() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/api/movies")
        .then(r => r.json())
        .then(data => setMovies(data))
        .catch(err => alert(err))  
    }, []);

    function deleteMovie(id){
      const moviesFiltered = movies.filter(m => m.id !== id);
      console.log(id)
          setMovies(moviesFiltered);
          console.log(movies)
    }
  return (
    <div className='movie-container'>
    <MoviesLists movies={movies} deleteMovie={deleteMovie} />
    </div>
  )
}

export default MoviesContainer

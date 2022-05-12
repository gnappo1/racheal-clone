import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import Watchlistlists from "./Watchlistlists"
import WatchlistForm from "./WatchlistForm"
import "./styles.css"
import YoutubeEmbed from "./YoutubeEmbed"

function MoviesCard({movie, deleteMovie}) {
    const {id} = useParams()
    const location = useLocation()
    const [movieObj, setMovieObj] = useState(null);
   // const history = useHistory()
    const [watchlists, setWatchlists] = useState([])

    useEffect(() => {   
        if (!movie) {
            fetch(`/api/movies/${id}`)
            .then(resp => resp.json())
            .then(movie => {
              setMovieObj(movie)
            })
        }
    }, [movie, id]);

    const addNewWatchlist = (watchlistObj) => {
        setWatchlists(currentWatchlists => [watchlistObj, ...currentWatchlists])
    }

    const finalMovie = movie ? movie : movieObj
    if (!finalMovie) return <h1>Loading...</h1>

    function handleDelete() {
        fetch(`/api/movies/${movie.id}`, {
          method: "DELETE",
        })
          .then(r => r.json())
          .then(data => {
    
            deleteMovie(movie.id)
            console.log(data, 'deleted item')
          });
      }
  return (
    <div>
         {finalMovie.image_url ? <YoutubeEmbed embedId={finalMovie.image_url} alt="Something went wrong" /> : null}
         <h3>Title: <Link to={`/movies/${finalMovie.id}`}>{finalMovie.title}</Link></h3>
         {location.pathname !== "/movies" ? (<>
          <WatchlistForm addNewWatchlist={addNewWatchlist} movieId={finalMovie.id} />
          <br />
        <hr />
        <hr />
          <Watchlistlists watchlists={watchlists} />
        </>) : null }
    </div>
  )
}

export default MoviesCard
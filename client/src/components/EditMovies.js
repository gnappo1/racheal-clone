import {useState} from 'react'

function EditMovies({movieObj, handleUpdate}) {
    const [movie, setMovie] = useState({
        title: postObj.title
    });
    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if ([movie.title].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }

        fetch(`api/movies/${movieObj.id}`, {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({title: movie.title})
       })
       .then((resp) => {
            if (resp.status === 201) {
                resp.json()
                .then(data => handleUpdate(data))
            } else {
                resp.json()
                .then(errorObj => (errorObj.error))
            }
        })
        .catch(err => (err.message))
       
        
    }
  return (
    <div>EditMovies</div>
  )
}

export default EditMovies
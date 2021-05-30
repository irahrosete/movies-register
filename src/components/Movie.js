import { FaTimes } from 'react-icons/fa'

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <h3>
        {movie.title}
        <FaTimes />
      </h3>
      <p>{movie.category}</p>
    </div>
  )
}

export default Movie

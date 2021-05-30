const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <h3>{movie.title}</h3>
      <p>{movie.category}</p>
    </div>
  )
}

export default Movie

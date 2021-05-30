import { useState } from 'react'
import Header from './components/Header'
import Movies from './components/Movies'

const App = () => {
  const [movies, setMovies] = useState(
    [
      {
        id: 1,
        title: "Spiderman",
        category: "Action",
        watched: false
      },
      {
        id: 2,
        title: "South Park",
        category: "Action",
        watched: false
      },
      {
        id: 3,
        title: "Batman",
        category: "Action",
        watched: false
      }
    ]
  )
  console.log(movies)

  return (
    <div className='container'>
      <Header />
      <Movies movies={movies} />
    </div>
    )
}

export default App

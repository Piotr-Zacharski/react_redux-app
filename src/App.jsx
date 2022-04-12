import { Paper } from '@mui/material'
import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [films, setFilms] = useState([])

  const getFilms = () => {
    fetch('https://my-film-api.herokuapp.com/films')
      .then(response => response.json())
      .then(data => {
        setFilms(data)
      }
      )
  }

  useEffect(() => {
    getFilms()
  },[])

  return (
    <div>
      {films.map(film => (
        <Paper key={film.id} elevation={24} style={{width: '800px', textAlign: 'center', justifyContent: 'center', margin: '0 auto'}}>
          <h1>{film.title}</h1>
          <p>{film.director}</p>
          <p>{film.actors}</p>
          <p>{film.plot}</p>
          <p>{film.year}</p>
        </Paper>
      ))}
    </div>
  )
}

export default App

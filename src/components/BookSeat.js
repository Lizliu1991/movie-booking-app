import React,{useContext} from 'react'
import MoviesContext from '../context/MoviesContext'
import Movie from './Movie'
function BookSeat() {
 const {movies, setMovies} = useContext(MoviesContext)
  return (
    <div className='movie-choosen'>
        <h2>Booking confirmed</h2>
    </div>
  )
}

export default BookSeat
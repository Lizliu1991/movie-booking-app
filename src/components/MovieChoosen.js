import React,{useContext} from 'react'
import MoviesContext from '../context/MoviesContext'
import Movie from './Movie';
import {  useParams,useNavigate } from 'react-router-dom'


function MovieChoosen() {

    const {movies, setMovies} = useContext(MoviesContext)
    const { id } = useParams();
    const history= useNavigate();
    const movieChoosen= movies.find((movie) => movie.id !== id )

  return (
    <div>MovieChoosen</div>
  )
}

export default MovieChoosen
import React, { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

// import { useNavigate } from 'react-router-dom'
import Movie from "./Movie";

function MovieList() {
  const { movies } = useContext(MoviesContext);
  // const history= useNavigate()

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;

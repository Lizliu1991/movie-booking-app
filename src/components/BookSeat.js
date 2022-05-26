import React from "react";
// import MoviesContext from '../context/MoviesContext'
// import Movie from './Movie'

function BookSeat() {
  //  const {movies, setMovies} = useContext(MoviesContext)
  return (
    <>
    
      <div className="flex flex-col items-center">
      <ul className="showcase flex" >
      <li className="mx-5">
        <div className="seat"></div>
        <small>N/A</small>
      </li>

      <li className="mx-5">
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>

      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>

    <div className="container">
      <div className="screen"></div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat "></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>

      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
      </div>
    </div>

    <p className="text">
      You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span>
    </p>
  
      </div>
    </>
  );
}

export default BookSeat;

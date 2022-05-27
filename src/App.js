import React, { useState, useEffect } from "react";
import MoviesContext from "./context/MoviesContext";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

import BookSeat from "./components/BookSeat";
import MovieChoosen from "./components/MovieChoosen";

function App() {
  const [movies, setMovies] = useState([]);

  //make a call to the api
  const getMovieRequest = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d83033543a6c7891ee001cf3bb2dac7b";
    const data = await fetch(url);
    const responseJson = await data.json();


    setMovies(responseJson.results);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />

        <div>
          <MoviesContext.Provider value={{ movies, setMovies }}>
            <Routes>
              <Route exact="true" element={<MovieList />} path="/" />
              <Route exact="true" element={<MovieChoosen />} path="/:id" />
              <Route exact="true" element={<BookSeat />} path="/bookSeat" />
            </Routes>
          </MoviesContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

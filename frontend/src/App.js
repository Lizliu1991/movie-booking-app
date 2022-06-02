import React, { useState, useEffect } from "react";
import axios from "axios"
import MoviesContext from "./context/MoviesContext";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

import BookSeat from "./components/BookSeat";
import MovieChoosen from "./components/MovieChoosen";
import Success from "./Pages/Success"

function App() {
  const [movies, setMovies] = useState([]);

//connect with backend
  const getData = () => {
    axios.get("http://localhost:5000", { crossdomain: true })
      .then(response => {
        console.log(response.data)

      })
      .catch(function (error) {
        console.log(error)
      })
  }

  //make a call to the api
  const getMovieRequest = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d83033543a6c7891ee001cf3bb2dac7b";
    await axios.get(url)
      .then(response => {
        const results = response.data.results
        setMovies(results)
        
      })
      .catch(function (error) {
        console.log(error)
      })
  }

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
              <Route exact="true" element={<Success />} path="/success" />
            </Routes>
          </MoviesContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

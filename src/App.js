import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=a4fa4838";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Super man");
  }, []);

  return (
    <div className="app">
      <h1>CrispyFlix</h1>

      <div className="search">
        <input
          placeholder="search movies"
          value={searchTitle}
          onChange={(e) => {setSearchTitle(e.target.value)}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {searchMovies(searchTitle)}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found.</h2>
        </div>
      )}
    </div>
  );
};

export default App;

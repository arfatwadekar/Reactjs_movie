import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// f2d1e4b6
const API_URL = "http://www.omdbapi.com?apiKey=f2d1e4b6";


const App = () => {

  const [movies, setMovies] = useState([]);

  const [SearchTerm , setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies(`spiderMan`);
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="search for movies"
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() =>searchMovies(SearchTerm)}></img>
      </div>

      {movies?.length > 0 ? (<div className="container">{movies.map((movie)=><MovieCard movie={movie}/>)}</div>) : (<div className="empty"><h2>No Movies Found</h2></div>)}

    </div>
  );
}

export default App;

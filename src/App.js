import {useState} from 'react';
import MoviesList from './components/MoviesList';

function App() {
  const [movies,setMovies]=useState([]);

  async function fetchMoviesHandler(){
    const res=await fetch('https://swapi.info/api/films')
    const data=await res.json();
      const transformedMovies=data.map(movieData=>{
        return {
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseDate:movieData.release_date
        }
      })
      setMovies(transformedMovies);
  }
  return (
    <div>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch movies</button>
      </section>
      <section>
        <MoviesList movies={movies}></MoviesList>
      </section>
    </div>
  );
}

export default App;

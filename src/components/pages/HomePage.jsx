import  MovieList  from 'components/movieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrandingMovies } from 'services/MoviesAPI';
import css from './HomePage.module.css'

fetchTrandingMovies();

export default function HomePage(){
  const [movies, setMovies] = useState(null);

   useEffect(() => {
     const getMovies = async () => {
       try {
         const results = await fetchTrandingMovies();
         setMovies(results);
       } catch (error) {
        alert(`Oops, some error occurred... Message: ${error.message}`);
       }
     };
     getMovies();
   }, []);

  return (
    <>
      <h1 className={css.title}>Trending films</h1>
      {movies && <MovieList movies={movies} />}
    </>
  );
};

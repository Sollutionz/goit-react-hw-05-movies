import  MovieList  from 'components/movieList/MovieList';
import  SearchMoviesForm  from 'components/searchMovies/SearchMoviesForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieBySearch } from 'services/MoviesAPI';

export default function MoviesPage () {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        const results = await fetchMovieBySearch(query);
          setSearchMovies(results);
        if (results.length === 0 && query)
          //    toast.error(`Sorry. There are no movies ... 😭. Please, try some other words for
          // search`);

          setSearchMovies(results);
      } catch (error) {
        //  toast.error(`Oops, some error occurred... Message: ${error}`);
      }
    };
    getMovies();
  }, [query]);

  return (
    <>
      <SearchMoviesForm />
      {searchMovies && <MovieList movies={searchMovies} />}
    </>
  );
};

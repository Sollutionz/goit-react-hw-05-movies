import  MovieDetails  from 'movieDetails/MovieDetails';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/MoviesAPI';
import css from './MovieDetailsPage.module.css'

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getMoviesDetails = async () => {
      try {
        const results = await fetchMoviesById(movieId);
        setMovie(results);
      } catch (error) {
        alert(`Oops, some error occurred... Message: ${error}`);
      }
    };
    getMoviesDetails();
  }, [movieId]);

  return (
    <>
      {movie ? (
        <>
          <Link to={location.state?.from ?? '/'} type="button" className={css.link}>
            Go back{' '}
          </Link>
          <MovieDetails {...movie} />
          <Suspense fallback={<h1>Loading...</h1>}>
              <Outlet />
          </Suspense>
        </>
      ) : (
        <div>Not found</div>
      )}
    </>
  );
};

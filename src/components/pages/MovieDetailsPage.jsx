import  MovieDetails  from 'movieDetails/MovieDetails';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/MoviesAPI';

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
          <Link to={location.state?.from ?? '/'} type="button">
            Go back{' '}
          </Link>
          <MovieDetails {...movie} />
          <Suspense fallback={<h1>Loading...</h1>}>
            <main>
              <Outlet />
            </main>
          </Suspense>
        </>
      ) : (
        <div>Not found</div>
      )}
    </>
  );
};

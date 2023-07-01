import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieDetails({
  poster_path,
  original_title,
  overview,
  genres,
  vote_average,
  release_date,
}) {
  const location = useLocation();
  const date = new Date(release_date).getFullYear();
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : 'https://via.placeholder.com/300x450?text=Sorry+No+Poster';
  const score = vote_average.toFixed(1);
  const stringOfGenres = genres.map(el => el.name).join('  ');

  return (
    <>
      <div>
        <img src={poster} alt={original_title} />

        <div>
          <h1>
            {original_title} ({date})
          </h1>
          <p>User score: {score}%</p>
        </div>

        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>

        <div>
          <h2>Genres</h2>
          <p>{stringOfGenres}</p>
        </div>
      </div>

      <h2>Additional information</h2>
      <div>
        <Link to={'cast'} state={location.state}>
          Cast
        </Link>
        <Link to={'reviews'} state={location.state}>
          Reviews
        </Link>
      </div>
    </>
  );
}
MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
};

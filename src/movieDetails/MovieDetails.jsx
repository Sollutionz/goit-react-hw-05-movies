import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieDetails.module.css';

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
      <div className={css.container}>
        <img src={poster} alt={original_title} />

        <div className={css.topicItem}>
          <h1 className={css.title}>
            {original_title} ({date})
          </h1>
          <p className={css.text}>User score: {score}%</p>

          <h2 className={css.title}>Overview</h2>
          <p className={css.text}>{overview}</p>

          <h2 className={css.title}>Genres</h2>
          <p className={css.text}>{stringOfGenres}</p>
        </div>
      </div>

      <h2 className={css.additional}>Additional information</h2>
      <div className={css.links}>
        <Link to={'cast'} state={location.state} className={css.link}>
          Cast
        </Link>
        <Link to={'reviews'} state={location.state} className={css.link}>
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

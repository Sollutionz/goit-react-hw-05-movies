import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieListItem.module.css'

export default function MovieListItem({ id, title, poster_path }) {
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w342${poster_path}`
    : 'https://via.placeholder.com/342x512?text=Sorry+No+Poster';

  const movieId = id;
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${movieId}`} state={{ from: location }} className={css.link}>
        <div>
          <img src={poster} alt={title} />
          <div className={css.title}>{title}</div>
        </div>
      </Link>
    </li>
  );
}

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
};

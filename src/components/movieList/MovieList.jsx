import  MovieListItem  from 'components/movieListItem/MovieListItem';
import PropTypes from 'prop-types';
import css from './MovieList.module.css'

export default function MovieList({ movies }){
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {movies.map(item => {
          return <MovieListItem key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

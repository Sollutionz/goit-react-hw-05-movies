import  MovieListItem  from 'components/movieListItem/MovieListItem';
import PropTypes from 'prop-types';

export default function MovieList({ movies }){
  return (
    <div>
      <ul>
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

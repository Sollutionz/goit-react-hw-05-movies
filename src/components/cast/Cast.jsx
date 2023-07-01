import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/MoviesAPI';
import css from './Cast.module.css'

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        alert(`Oops, some error occurred... Message: ${error.message}`);
      }
    };
    getMovieCast();
  }, [movieId]);
  return (
    <>
      {cast.length === 0 ? (
        <p>Sorry we have no information about the actors</p>
      ) : (
        <ul className={css.list}>
          {cast.map(({ id, profile_path, name, character }, i) => {
            let newId = id * i;
            const poster = profile_path
              ? `https://image.tmdb.org/t/p/w185${profile_path}`
              : 'https://via.placeholder.com/185x278?text=Sorry+No+Photo';
            return (
              <li key={newId} className={css.listItem}>
                <img src={poster} alt={name} className={css.img} />
                <h3 className={css.name}>{name}</h3>
                <p className={css.char}>{character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

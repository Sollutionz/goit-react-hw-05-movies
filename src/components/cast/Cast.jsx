import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/MoviesAPI';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        // alert(`Oops, some error occurred... Message: ${error.message}`);
      }
    };
    getMovieCast();
  }, [movieId]);
  return (
    <>
      {cast.length === 0 ? (
        <p>Sorry we have no information about the actors</p>
      ) : (
        <ul>
          {cast.map(({ id, profile_path, name, character }, i) => {
            let newId = id * i;
            const poster = profile_path
              ? `https://image.tmdb.org/t/p/w185${profile_path}`
              : 'https://via.placeholder.com/185x278?text=Sorry+No+Photo';
            return (
              <li key={newId}>
                <img src={poster} alt={name} />
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

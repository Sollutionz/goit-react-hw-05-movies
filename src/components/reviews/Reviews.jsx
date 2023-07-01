import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from 'services/MoviesAPI';

export default function Reviews (){
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReview = async () => {
      try {
        const data = await fetchMovieReview(movieId);
        setReviews(data);
      } catch (error) {
        // alert(`Oops, some error occurred... Message: ${error.message}`);
      }
    };
    getMovieReview();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>Sorry there are still no reviews</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <div>
                  <span>Author:</span>
                  {author}
                </div>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

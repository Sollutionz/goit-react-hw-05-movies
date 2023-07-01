import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from 'services/MoviesAPI';
import css from './Reviews.module.css'

export default function Reviews (){
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReview = async () => {
      try {
        const data = await fetchMovieReview(movieId);
        setReviews(data);
      } catch (error) {
        alert(`Oops, some error occurred... Message: ${error.message}`);
      }
    };
    getMovieReview();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p className={css.nothing}>Sorry there are still no reviews</p>
      ) : (
        <ul className={css.list}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className={css.listItem}>
                <div className={css.author}>
                  {author}
                </div>
                <p className={css.content}>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

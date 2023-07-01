import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <div>
        <span role="img" aria-label="pizza icon">
          🍕
        </span>{' '}
        GoMovie
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

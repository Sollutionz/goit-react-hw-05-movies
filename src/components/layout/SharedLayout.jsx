import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.label}>
          <span role="img" aria-label="pizza icon">
            🍕
          </span>{' '}
          GoMovie
        </div>
        <div className={css.nav}>
          <Link to="/" className={css.link}>
            Home
          </Link>
          <Link to="movies" className={css.link}>
            Movies
          </Link>
        </div>
      </header>
      <main className={css.container}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from './SeacrchMovies.module.css'


export default function SearchMoviesForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  function onChange({ target: { value } }) {
    setSearchQuery(value);
  }

  function onSubmit(e) {
    e.preventDefault();
    const search = searchQuery.toLowerCase().trim();

    if (!search) alert('Please enter some information for search');

    setSearchParams({ search });
  }

  return (
    <div className={css.container}>
      <form onSubmit={onSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie you wish"
          value={searchQuery}
          onChange={onChange}
          name="query"
          className={css.input}
        />
        <button type="submit" className={css.button}>Search</button>
      </form>
    </div>
  );
};

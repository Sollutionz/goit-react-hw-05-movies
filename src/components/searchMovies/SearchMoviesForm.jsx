import { useState } from "react";
import { useSearchParams } from "react-router-dom";

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
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie you wish"
          value={searchQuery}
          onChange={onChange}
          name="query"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

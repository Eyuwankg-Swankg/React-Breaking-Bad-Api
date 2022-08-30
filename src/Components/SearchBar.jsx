import React from "react";

function SearchBar({ searchCharacters }) {
  return (
    <div class="search-container">
      <input
        placeholder="Search Characters..."
        onChange={(event) => searchCharacters(event.target.value)}
      />
    </div>
  );
}

export default React.memo(SearchBar);

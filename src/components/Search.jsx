import React from "react";

function Search({ searchQuery, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search plants..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;

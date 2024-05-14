import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by plant name..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;

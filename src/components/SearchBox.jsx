import React, { useState } from 'react';

const SearchBox = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`You searched for: ${query}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for sports..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
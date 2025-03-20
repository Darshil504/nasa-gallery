import React, { useState } from "react";
import "./SearchBar.css"; // Add styles

const SearchBar = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearch(e.target.value);
        }}
      />

      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="image">Images</option>
        <option value="video">Videos</option>
      </select>
    </div>
  );
};

export default SearchBar;

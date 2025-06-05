import React, { useState } from "react";
import "../css/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search categories..."
      value={term}
      onChange={handleChange}
    />
  );
};

export default SearchBar;

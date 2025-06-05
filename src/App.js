import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryList from "./components/CategoryList";
import LinkDisplay from "./components/LinkDisplay";
import categories from "./data/links";
import "./css/App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentLink, setCurrentLink] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentLink(null);
  };

  const pickRandomLink = () => {
    if (!selectedCategory) return;
    const category = categories.find((cat) => cat.id === selectedCategory);
    if (!category || category.links.length === 0) return;

    const randomIndex = Math.floor(Math.random() * category.links.length);
    const randomLink = category.links[randomIndex];

    setCurrentLink(randomLink);

    // Otvori link u novom tabu
    window.open(randomLink.url, "_blank");
  };

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="app">
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <CategoryList
        categories={filteredCategories}
        onSelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

      {selectedCategory && (
        <div className="centered">
          <button className="mystery-btn" onClick={pickRandomLink}>
            Mystery Click
          </button>
        </div>
      )}

      {currentLink && <LinkDisplay link={currentLink} />}
    </div>
  );
};

export default App;

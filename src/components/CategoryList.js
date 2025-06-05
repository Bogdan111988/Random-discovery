import React from "react";
import "../css/CategoryList.css";

const CategoryList = ({ categories, onSelect, selectedCategory }) => {
  return (
    <div className="category-list">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-btn ${
            selectedCategory === cat.id ? "selected" : ""
          }`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;

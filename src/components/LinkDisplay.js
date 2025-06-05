import React from "react";
import "../css/LinkDisplay.css";

const LinkDisplay = ({ link }) => {
  return (
    <div className="link-display">
      <h2>{link.name}</h2>
      <p>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.url}
        </a>
      </p>
    </div>
  );
};

export default LinkDisplay;

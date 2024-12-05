// src/components/Tile.js
import React from 'react';
import './Tile.css'; // For styling

function Tile({ image, title, description }) {
  return (
    <div className="tile">
      <img src={image} alt={title} className="tile-image" />
      <div className="tile-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Tile;

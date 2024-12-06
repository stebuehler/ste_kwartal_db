// src/components/TileGrid.js
import React from 'react';
import Tile from './Tile';
import './TileGrid.css';

function TileGrid({ items }) {
  return (
    <div className="tile-grid">
      {items.map((item) => (
        <Tile
          key={item.id}
          image={item.image}
          title={item.Name}
          description={item.Verlag}
        />
      ))}
    </div>
  );
}

export default TileGrid;

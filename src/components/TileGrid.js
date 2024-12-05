// src/components/TileGrid.js
import React from 'react';
import Tile from './Tile';

function TileGrid({ items }) {
  return (
    <div className="tile-grid">
      {items.map((item) => (
        <Tile
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default TileGrid;

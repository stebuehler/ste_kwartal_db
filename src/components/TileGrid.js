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
          name={item.Name}
          verlag={item.Verlag}
          thema={item.Thema}
          beschreibung={item.Beschreibung}
          anzahl_karten={item.Anzahl_Karten}
          anzahl_werte={item.Anzahl_Kategorien_Spielbar}
        />
      ))}
    </div>
  );
}

export default TileGrid;

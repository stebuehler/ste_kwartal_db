// src/components/TileGrid.js
import React from 'react';
import Tile from './Tile';
import './TileGrid.css';

const defaultImage = "https://via.placeholder.com/200x150"

function TileGrid({ items }) {
  return (
    <div className="tile-grid">
      {items.map((item) => (
        <Tile
          key={item.id}
          image={item.image || defaultImage}
          name={item.Name}
          verlag={item.Verlag}
          thema={item.Thema}
          beschreibung={item.Beschreibung}
          anzahl_karten={item.Anzahl_Karten}
          anzahl_werte={item.Anzahl_Kategorien_Spielbar}
          baujahr={item.Baujahr}
        />
      ))}
    </div>
  );
}

export default TileGrid;

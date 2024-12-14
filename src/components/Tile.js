// src/components/Tile.js
import React from 'react';
import './Tile.css'; // For styling

function Tile({ image, name, verlag, thema, beschreibung, anzahl_karten, anzahl_werte, baujahr }) {
  return (
    <div className="tile">
      <img src={image} alt={name} className="tile-image" />
      <div className="tile-info">
        <h3>{name}</h3>
        <p>{verlag}<br />
        {baujahr}</p>
        <p>Thema: {thema}<br />
        {anzahl_karten} Karten, {anzahl_werte} Werte</p>
        <p>Beschreibung: {beschreibung}</p>
      </div>
    </div>
  );
}

export default Tile;

// src/components/FilterBar.js
import React from 'react';

function FilterBar({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={activeFilter === filter ? 'active' : ''}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;

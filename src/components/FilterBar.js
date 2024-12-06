import React from "react";
import './FilterBar.css';

function FilterBar({ data, filters, setFilters }) {
  const getUniqueValues = (data, column) => {
    return [...new Set(data.map((item) => item[column]).filter((val) => val))].sort();
  };

  const names = getUniqueValues(data, "Name");
  const verlage = getUniqueValues(data, "Verlag");
  const themen = getUniqueValues(data, "Thema");

  return (
    <div className="filter-bar">
      <label>
        Name:
        <select
          value={filters.Name}
          onChange={(e) => setFilters({ ...filters, Name: e.target.value })}
        >
          <option value="All">All</option>
          {names.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Verlag:
        <select
          value={filters.Verlag}
          onChange={(e) => setFilters({ ...filters, Verlag: e.target.value })}
        >
          <option value="All">All</option>
          {verlage.map((verlag, index) => (
            <option key={index} value={verlag}>
              {verlag}
            </option>
          ))}
        </select>
      </label>

      <label>
        Thema:
        <select
          value={filters.Thema}
          onChange={(e) => setFilters({ ...filters, Thema: e.target.value })}
        >
          <option value="All">All</option>
          {themen.map((thema, index) => (
            <option key={index} value={thema}>
              {thema}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FilterBar;


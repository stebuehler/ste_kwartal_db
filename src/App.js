import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import './App.css';
import TileGrid from './components/TileGrid'; // Import your TileGrid component
import FilterBar from './components/FilterBar'; // Import your FilterBar component

function App() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({
    Name: "All",
    Verlag: "All",
    Thema: "All",
  });

  useEffect(() => {
    const fetchData = async () => {
      const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQV4edTfdxXQhdSSgBDLxCqYXdvEdqebS7p3HM_41FvGvES-Z3U_LwkPAifWCQvNNkW3V-bJQmEiLXl/pub?gid=0&single=true&output=csv";

      try {
        const response = await fetch(csvUrl);
        const csvData = await response.text();

        // Parse CSV with PapaParse
        const result = Papa.parse(csvData, {
        header: true, // Use the first row as column headers
        skipEmptyLines: true, // Skip empty rows
      });
        
        // Filter out rows where "Nummer" is blank
      const filteredData = result.data.filter((row) => row["Nummer"] && row["Nummer"].length > 0);

        setItems(filteredData);
      } catch (error) {
        console.error("Error fetching or parsing CSV data:", error);
      }
    };

    fetchData();
  }, []);  
  
  const filteredItems = items.filter((item) => {
    return (
      (filters.Name === "All" || item.Name === filters.Name) &&
      (filters.Verlag === "All" || item.Verlag === filters.Verlag) &&
      (filters.Thema === "All" || item.Thema === filters.Thema)
    );
  });

  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Ste Kwartal Database</h1>
      </header>
      <FilterBar data={items} filters={filters} setFilters={setFilters} />
      <div className="item-counter">
      {filteredItems.length === 1
    ? `1 Quartett`
    : `${filteredItems.length} Quartette`}
      </div>
      <TileGrid items={filteredItems} />
    </div>
  );
}

export default App;

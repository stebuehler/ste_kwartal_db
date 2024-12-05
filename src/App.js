import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import TileGrid from './components/TileGrid'; // Import your TileGrid component
import FilterBar from './components/FilterBar'; // Import your FilterBar component

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sheetId = "1Gcgk1X0ABrb0GWensKUDcENRCXyKst6sy_Vszu148Ew"
      const apiKey = "YOUR API KEY"
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Data?key=${apiKey}`;

      try {
        const response = await axios.get(url);
        const rows = response.data.values;
        const formattedData = rows.slice(1).map((row) => ({
          id: row[2],
          title: row[3],
          description: row[9],
          image: row[3] || "https://via.placeholder.com/200x150", // Use a placeholder if no image URL
          category: row[4],
        }));
        setItems(formattedData);
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    fetchData();
  }, []);
  
  const [activeFilter, setActiveFilter] = useState('All'); // State for the active filter

  const filters = ['All', 'Category 1', 'Category 2', 'Category 3']; // Define your filter categories
  const filteredItems = activeFilter === 'All'
    ? items
    : items.filter((item) => item.category === activeFilter); // Filter items based on the active filter

  return (
    <div className="App">
      <FilterBar
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter} // Pass the function to change the active filter
      />
      <TileGrid items={filteredItems} /> {/* Pass the filtered items to the TileGrid */}
    </div>
  );
}

export default App;

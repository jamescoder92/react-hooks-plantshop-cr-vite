import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  function handleUpdatePlant(updatedPlant) {
    setPlants((prev) =>
      prev.map((p) => (p.id === updatedPlant.id ? updatedPlant : p))
    );
  }

  return (
    <div className="App">
      <Header />
      <PlantPage
        plants={plants}
        onAddPlant={handleAddPlant}
        onUpdatePlant={handleUpdatePlant}
      />
    </div>
  );
}

export default App;

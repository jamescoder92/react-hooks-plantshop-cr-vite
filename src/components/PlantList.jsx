import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePlant }) {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onUpdatePlant={onUpdatePlant} />
      ))}
    </div>
  );
}

export default PlantList;

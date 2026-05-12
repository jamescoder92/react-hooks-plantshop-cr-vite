import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const [soldOut, setSoldOut] = useState(plant.sold_out);

  function handleSoldOutToggle() {
    const updatedPlant = { ...plant, sold_out: !soldOut };

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sold_out: !soldOut }),
    })
      .then((r) => r.json())
      .then((data) => {
        setSoldOut(data.sold_out);
        onUpdatePlant(data);
      });
  }

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>${plant.price.toFixed(2)}</p>
      <button
        className={soldOut ? "sold-out" : ""}
        onClick={handleSoldOutToggle}
      >
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </div>
  );
}

export default PlantCard;

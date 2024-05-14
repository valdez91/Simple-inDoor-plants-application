import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [plantData, setPlantData] = useState({
    name: "",
    image: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantData({ ...plantData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAddPlant function passed from PlantPage with the new plant data
    onAddPlant(plantData);
    // Reset the form fields
    setPlantData({
      name: "",
      image: "",
      price: 0,
    });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={plantData.name}
          onChange={handleChange}
          placeholder="Plant name"
        />
        <input
          type="text"
          name="image"
          value={plantData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="number"
          name="price"
          value={plantData.price}
          onChange={handleChange}
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
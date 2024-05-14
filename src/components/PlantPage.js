import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    fetchPlants(); // Fetch plants when component mounts
  }, []);

  const fetchPlants = () => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data); // Set all plants
        setFilteredPlants(data); // Initially, set filtered plants to all plants
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  };

  const handleSearch = (query) => {
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlants(filtered);
  };

  const handleAddPlant = (newPlant) => {
    // Add the new plant to the plants array
    setPlants([...plants, newPlant]);
    // Update filteredPlants to include the new plant
    setFilteredPlants([...filteredPlants, newPlant]);
  };

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
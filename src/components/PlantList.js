// Import React from the react library
import React from "react";

// Import the PlantCard component from the./PlantCard file
import PlantCard from "./PlantCard";

// Define a function component called PlantList
function PlantList({ plants }) {
  // The component expects a prop called 'plants' which is an array of plant objects
  return (
    // Return an unordered list element with a class of 'cards'
    <ul className="cards">
      {
        // Use the map function to iterate over the plants array
        plants.map((plant) => (
          // For each plant, return a PlantCard component
          // Pass the plant object as a prop to the PlantCard component
          // Use the plant's id as the key for the component
          <PlantCard key={plant.id} plant={plant} />
        ))
      }
    </ul>
  );
}

// Export the PlantList component as the default export
export default PlantList;
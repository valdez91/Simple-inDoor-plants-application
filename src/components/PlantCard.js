// Import React from the react library
import React from "react";

// Define a function component called PlantCard
function PlantCard({ plant }) {
  // The component expects a prop called 'plant' which is an object containing plant data
  return (
    // Return a list item element with a class of 'card' and a data-testid of 'plant-item'
    <li className="card" data-testid="plant-item">
       {/* Display the plant's image using an img element */}
      <img src={plant.image} alt={plant.name} />
       {/* Display the plant's name using an h4 element */}
      <h4>{plant.name}</h4>
       {/* Display the plant's price using a p element */}
      <p>Price: {plant.price}</p>
      {/*  If the plant is sold out, display a button with the text 'Out of Stock' */}
      {/*  Otherwise, display a button with the text 'In Stock' and a class of 'primary' */}
      {plant.isSoldOut? (
        <button>Out of Stock</button>
      ) : (
        <button className="primary">In Stock</button>
      )}
    </li>
  );
}

// Export the PlantCard component as the default export
export default PlantCard;
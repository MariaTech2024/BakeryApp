import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext.jsx';
import FoodItem from '../FoodItem/FoodItem.jsx';

const FoodDisplay = ({ category, searchQuery }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top desserts near you</h2>
      <div className="food-display-list">
        {food_list
          .filter((item) => {
           
            return (
              (category === "All" || category === item.category) &&
              item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
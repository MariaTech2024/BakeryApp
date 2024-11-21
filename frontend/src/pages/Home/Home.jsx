import React, { useState, useRef } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';
import AppDownload from '../../components/AppDownload/AppDownload.jsx';

const Home = () => {
  const [category, setCategory] = useState("All");
  
  // Create refs for ExploreMenu and FoodDisplay sections
  const exploreMenuRef = useRef(null);

  const handleScrollToMenu = () => {
    // Scroll to ExploreMenu section
    if (exploreMenuRef.current) {
      exploreMenuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header onViewMenuClick={handleScrollToMenu} />
      <div ref={exploreMenuRef}>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} setCategory={setCategory} />
      </div>
      <AppDownload />
    </div>
  );
};

export default Home;
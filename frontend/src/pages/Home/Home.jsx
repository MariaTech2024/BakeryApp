import React, { useState, useRef } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.jsx";
import AppDownload from "../../components/AppDownload/AppDownload.jsx";

const Home = ({ searchQuery, setSearchQuery }) => {
  const [category, setCategory] = useState("All");
  const exploreMenuRef = useRef(null);

  const handleScrollToMenu = () => {
    
    if (exploreMenuRef.current) {
      exploreMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
    setSearchQuery("");
  };

  return (
    <div>
      <Header onViewMenuClick={handleScrollToMenu} />
      <div ref={exploreMenuRef}>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} searchQuery={searchQuery} />
      </div>
      <AppDownload />
    </div>
  );
};

export default Home;
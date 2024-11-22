import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext.jsx";


const NavBar = ({ setShowLogin, onSearchChange }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleSearch = () => {
    setIsSearchVisible((prevState) => !prevState); 
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); 
  };

  const handleSearchSubmit = (e) => {
    const query = searchQuery.trim();
    if (e.key === "Enter") { 
      onSearchChange(query); 
      navigate("/"); 
      const foodDisplay = document.getElementById("food-display");
      if (foodDisplay) {
        foodDisplay.scrollIntoView({ behavior: "smooth" }); 
      }
      setSearchQuery("");
     
    }
    
  };

  const resetSearchAndCategory = () => {
    setSearchQuery(""); 
    onSearchChange(""); 
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={resetSearchAndCategory}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
            resetSearchAndCategory(); 
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("mobile-app");
            resetSearchAndCategory(); 
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact-us");
            resetSearchAndCategory(); 
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
      <div className="navbar-search-icon">
          {isSearchVisible && (
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchQuery} 
              onChange={handleSearchChange} 
              onKeyDown={handleSearchSubmit}
            />
          )}
        <img
          src={assets.search_icon}
          alt="search"
          onClick={toggleSearch} 
        />
        
          
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />{" "}
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li className="logout" onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
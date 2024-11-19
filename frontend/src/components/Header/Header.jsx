import React from 'react';
import headerImg from '../../assets/header_img.png'; 
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header" style={{ backgroundImage: `url(${headerImg})`, backgroundRepeat: 'no-repeat' }}>
        <div className="header-contents">
            <h2>Order your favourite dessert here</h2>
            <p>Explore a world of irresistible desserts that blend classic flavors with creative twists, perfect for every sweet tooth. Whether you’re a fan of creamy, chocolatey delights or fruity, refreshing treats, our website has the perfect recipe waiting for you! Indulge in unique flavors and discover new favorites that make every bite a delightful experience.</p>
            <button>View Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Header;
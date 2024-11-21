import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';
import Verify from './pages/Verify/Verify.jsx';
import MyOrders from './pages/MyOrders/MyOrders.jsx';

const App = () => {

const [showLogin, setShowLogin] = useState(false);
const [searchQuery, setSearchQuery] = useState(""); // Search query state

const handleSearchChange = (query) => {
  setSearchQuery(query); // Update search query
};

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
<NavBar setShowLogin={setShowLogin} onSearchChange={handleSearchChange}/>
<Routes>
  < Route path='/' element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
  < Route path='/cart' element={<Cart/>} />
  < Route path='/order' element={<PlaceOrder/>} />
  < Route path='/verify' element={<Verify/>} />
  < Route path='/myorders' element={<MyOrders/>} />
</Routes>
</div>
<Footer />
    
    </>
  )
}

export default App;
import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
<img className="footer-logo" src={assets.logo} alt="" />
<p>At Cakery, we bring you the finest cakes and desserts, crafted with love and the freshest ingredients. From classic flavors to custom creations, we are dedicated to making every occasion unforgettable with our sweet delights.</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+972-55-444-33-22</li>
    <li>cakery@gmail.com</li>
</ul>
            </div>
           
        </div>
        <hr />
       <p className="footer-copyright">Copyright 2024 © Cakery.com - All Rights Reserved. </p>
    </div>
  )
}

export default Footer;
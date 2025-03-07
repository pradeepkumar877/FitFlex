import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-body">
            <p>SB FITZZ - &copy; 2023 - All Rights Reserved</p>
            <div className="social-icons">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
            </div>
        </div>
    </div>
  );
};

export default Footer;

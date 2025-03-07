import React from 'react';
import '../styles/Hero.css';
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>SB Fitness</h5>
        </span>
        <h2>Uncontrolable  <b>Fitness</b> Wizard: Develop a new body style <b>Upgrade</b> Your Life !</h2>
        <a href="#search">
          <button className="cta-button">
            Explore More <FaArrowDown />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;

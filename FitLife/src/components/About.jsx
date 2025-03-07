import React from 'react';
import '../styles/About.css';
import aboutImg from '../assets/about-Img.png';

const About = () => {
  return (
    <div className='about-container' id='about'>
      <div className="about-image">
          <img src={aboutImg} alt="About Us" className="fade-in" />
      </div>
      <div className="about-text">
          <h5>About Us</h5>
          <h3>Embark on a Fitness Odyssey with SB Fitzz</h3>
          <p>
            Welcome to SB Fitzz, where the beat of cutting-edge workouts harmonizes with the enthusiasm of a community. 
            Join us to unleash your full potential and redefine fitness!
          </p>
      </div>
    </div>
  );
};

export default About;

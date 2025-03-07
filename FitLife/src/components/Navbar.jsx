import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  return (
    <nav className={scrollPosition > 100 ? 'navbar nav-scrolled' : 'navbar'}>
      <h3 onClick={() => navigate('/')}>SB Fitzz</h3>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/#about')}>About</li>
        <li onClick={() => navigate('/#search')}>Search</li>
      </ul>
    </nav>
  );
};

export default Navbar;

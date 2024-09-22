import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create styles for the navbar
 
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Search Bar
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    
  };

  // Toggle Sliding Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="logo">
          <Link to="/"><i class="fab fa-shopify"></i>Themes</Link>
        </div>

        {/* Search Icon */}
        <div className="icons">
          <button className="search-icon" onClick={toggleSearch}>
            <i className="fas fa-search"></i>
          </button>

          {/* Bars Toggle Button */}
          <button className="menu-icon" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="close-search" onClick={toggleSearch}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}

        {/* Full-screen Menu */}
        {isMenuOpen && (
          <div className="menu-overlay">
           <div className={`menu ${isMenuOpen ? 'show' : ''}`} id='menu'>
              <button className="close-menu" onClick={toggleMenu}>
                <i className="fas fa-times"></i>
              </button>
              <ul className="menu-links">
                {/* Dropdown Menu */}
                <li className="dropdown">
                  Collections
                  <ul className="dropdown-content">
                    <li><Link className='link' to="/large">Large</Link></li>
                    <li><Link className='link' to="/free">Free</Link></li>
                    <li><Link className='link' to="/all">All</Link></li>
                    <li><Link className='link' to="/small">Small</Link></li>
                    <li><Link className='link' to="/trend">Trends</Link></li>
                  </ul>
                </li>

                {/* Two additional links */}
                <li><Link className='link' to="/login">Login</Link></li>
                <li><Link className='link' to="/allthemes">All themes</Link></li>
                <li><Link className='link' to="/home">Home</Link></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

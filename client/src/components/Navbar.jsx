import React, { useState } from 'react';
import '../assets/styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar" style={{
      position: 'fixed',
      top: '0',
      width: '100%',
      zIndex: '100',
      backgroundColor: 'white',
      boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.2)',
    }}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ marginLeft: '50px' }}>
          <p><span style={{ fontSize: 'xxx-large' }}>Gmart</span> </p>
        </Link>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/text" className="nav-link" onClick={toggleMobileMenu}>
              Text AI
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/image" className="nav-link" onClick={toggleMobileMenu}>
              Image AI
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
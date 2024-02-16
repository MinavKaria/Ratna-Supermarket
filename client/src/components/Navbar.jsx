import React, { useState } from 'react';
import '../assets/styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   <>
    <h1 className='text-3xl font-bold underline'>Navbar</h1>
   </>
  );
};

export default Navbar;
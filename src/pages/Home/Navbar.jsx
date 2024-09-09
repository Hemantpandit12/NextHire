import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { RiNextjsLine } from "react-icons/ri";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <RiNextjsLine className="navbar-logo" size={50} />
      <p className='RA'>NextHire</p>
      <ul className="nav-links">
        <li>
          <Link className='link'
            to="/" 
            style={activeLink === '/' ? { color: '#FF9100' } : { color: '#fff' }} 
            onClick={() => handleClick('/')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link className='link'
            to="/about" 
            style={activeLink === '/about' ? { color: '#FF9100' } : { color: '#fff' }} 
            onClick={() => handleClick('/about')}
          >
            About
          </Link>
        </li>
        <li>
          <Link className='link'
            to="/ContactUs" 
            style={activeLink === '/ContactUs' ? { color: '#FF9100' } : { color: '#fff' }} 
            onClick={() => handleClick('/ContactUs')}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link className='link'
            to="/Login" 
            style={activeLink === '/Login' ? { color: '#FF9100' } : { color: '#fff' }} 
            onClick={() => handleClick('/Login')}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
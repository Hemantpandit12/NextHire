import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaHireAHelper } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <FaHireAHelper className="navbar-logo" size={40} />
      <p className='RA'>NextHire</p>
      <ul className="nav-links">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/ContactUs" className="link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


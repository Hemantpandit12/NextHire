import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
//import { FaHireAHelper } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <nav className="navbar">
      <RiNextjsLine className="navbar-logo" size={50} />
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
        <li>
          <Link to="/Login" className="link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


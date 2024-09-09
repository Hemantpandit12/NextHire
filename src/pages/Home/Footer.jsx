import React from 'react';
//import { FaHireAHelper } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css';
import { RiNextjsLine } from "react-icons/ri";

function Footer() {
  return (
    <div className='Footer-container'>
      <div className="IconT">
        <RiNextjsLine className='Footer-icon' size={50} /> <div className='Next'>NextHire</div> 
        <div className="Footer-Link">
        <ul className="Footer-nav-links">
        <li>
          <Link to="/" className="FLink">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="FLink">
            About
          </Link>
        </li>
        <li>
          <Link to="/ContactUs" className="FLink">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Login" className="FLink">
            Login
          </Link>
        </li>
      </ul>
        </div>
      </div>
      <div className="Footer-line"></div>
      <div className="Text-container">
        <p className="Footer-text">Copyright © 2024 NextHire. All rights reserved.</p>
        </div>
        <div className="Social-media-icons">
        </div>
      </div>
  )
}

export default Footer;
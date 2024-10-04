import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import menu from './menu.svg';
import close from './close.svg';

const Navbar = () => {
  function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }

  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }

  return (
    <React.Fragment>
      <nav className="navbar">
        
        <p className='RA'><NavLink to="/home" className='RA'>NextHire</NavLink></p>
        <ul className="nav-links">
          <li className='hideOnMobile'>
            <NavLink className='link' to="/home">Home</NavLink>
          </li>
          <li className='hideOnMobile'>
            <NavLink className='link' to="/about">About</NavLink>
          </li>
          <li className='hideOnMobile'>
            <NavLink className='link' to="/ContactUs">Contact</NavLink>
          </li>
          <li className='hideOnMobile'>
            <NavLink className='link' to="/Login">Login</NavLink>
          </li>
          <li className='menu-button'>
            <img src={menu} alt="menu" className='link show' onClick={() => showSidebar()} />
          </li>
        </ul>
      </nav>
      <ul className="sidebar">
        <li onClick={() => hideSidebar()}>
          <img src={close} alt="menu" className='link close' />
        </li>
        <li>
          <NavLink className='link' to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink className='link' to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className='link' to="/ContactUs">Contact</NavLink>
        </li>
        <li>
          <NavLink className='link' to="/Explore">Explore</NavLink>
        </li>
        <li>
          <NavLink className='link' to="/Login">Login</NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navbar;
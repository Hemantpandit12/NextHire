import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminNavbar.css'
import menu from '../Home/menu.svg';
import close from '../Home/close.svg';

const AdminNavbar = () => {
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
      <nav className="AdminNavbar">
        
        <ul className="nav-links">
          <li className='hideOnMobile'>
            <NavLink className='link' to="/AdminHome">Home</NavLink>
          </li>
          <li className='hideOnMobile'>
            <NavLink className='link' to="/LoginProfiles">Login Profiles</NavLink>
          </li>
          <li className='hideOnMobile'>
            <NavLink className='link' to="/SeekerProfiles">Seekers Profiles</NavLink>
          </li>
          <li className='hideOnMobile'>
            <NavLink className='link' to="/ProvidersProfiles">Providers Profiles</NavLink>
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
        <li className='hideOnMobile'>
            <NavLink className='link' to="/AdminHome">Home</NavLink>
          </li>
          <li className='hideOnMobile'>
            <NavLink className='link' to="/LoginProfiles">Login Profiles</NavLink>
          </li>
          <li className='hideOnMobile'>
            <NavLink className='link' to="/SeekerProfiles">Seekers Profiles</NavLink>
          </li>
          <li className='hideOnMobile'>
            <NavLink className='link' to="/ProvidersProfiles">Providers Profiles</NavLink>
          </li>
          <li className='menu-button'>
            <img src={menu} alt="menu" className='link show' onClick={() => showSidebar()} />
          </li>
      </ul>
    </React.Fragment>
  );
};

export default AdminNavbar;
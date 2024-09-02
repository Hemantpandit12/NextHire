import React from 'react'
import './Header.css';
import Emp from './Programmer3.svg';


function Header() {
  return (
    <>
    <div className='Header-container'>
      <div className='latter-container'>
        <p className='latter l1'>Join</p>
        <p className='latter l2'>Next</p>
        <p className='latter l3'>Hire</p><br/>
      </div>
      <div className='logo'>
      <img src={Emp} alt='Logo' height={550} width={550}/ >
      </div>
    </div>
    </>
  )
}

export default Header;
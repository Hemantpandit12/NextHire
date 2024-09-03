import React from 'react'
import './Header.css';
import Emp from './Freelance-Developer.svg';


function Header() {
  return (
    <>
    <div className='Header-container'>
      <div className='latter-container'>
        <p className='latter l1'>Refer.</p>
        <p className='latter l2'>Connect.</p>
        <p className='latter l3'>Thrive.</p><br/>
        <p className='latter l4'>"Help your network find their dream job!<br/> Refer friends and contacts to job openings that match their skills."</p>
      </div>
      <div className="line"></div>
      <div className='logo'>
      <img src={Emp} alt='Logo' height={550} width={550}/ >
      </div>
    </div>
    </>
  )
}

export default Header;
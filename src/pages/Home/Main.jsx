import React from 'react'
import './Main.css';
import { Link } from 'react-router-dom';
function Main() {
  return (
    <div className='Main-container'>
        <div className="Main2">
          <div className="Main-Text">
            <h2>Welcome to <font color="#FF9100">NextHire</font></h2>
            <p className='Mainp'>"Referrals: The smart way to hire your<br/> next team member."</p><br/>
          </div><br/>
          <Link to="/About">
          <button className="Main-btn">Get Info</button>
          </Link>
        </div>
    </div>
  )
}
export default Main;
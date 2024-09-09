import React from 'react'
import './Main.css';
import Card from './Card';

function Main() {
  return (
    <div className='Main-container'>
          <Card />
        <div className="Main2">
          <div className="Main-Text">
            <h2>Welcome to <font color="#FF9100">NextHire</font></h2>
            <p className='Mainp'>"Referrals: The smart way to hire your<br/> next team member."</p><br/>
          </div><br/>
          <button className="Main-btn">Get Info</button>
        </div>
    </div>
  )
}
export default Main;
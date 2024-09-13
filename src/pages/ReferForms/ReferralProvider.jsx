import React from 'react';
import { Link } from 'react-router-dom';
import './ReferralProvider.css';
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
function ReferralProvider()
{
    return (
    <div class="ReferralProvider-container">
    <form class="ReferralProvider-form">
    <Link to="/">
    <div className='Back-button'><IoMdArrowRoundBack size={30}/></div>
    </Link>
    <div className='Provider-profile'><FaUserCircle size={100}/></div>

    <div class="Provider-flex-column">
      <label>Name </label></div>
      <div class="Provider-inputForm">
         <input type="text" class="Provider-input" placeholder="Firstname Lastname" minLength={4} required/>
      </div>

    <div class="Provider-flex-column">
      <label>Email </label></div>
      <div class="Provider-inputForm">
        <input type="email" class="Provider-input" placeholder="Enter your Email" minLength={4} required/>
      </div>
    
    <div class="Provider-flex-column">
      <label>Company Name </label></div>
      <div class="Provider-inputForm">
         <input type="text" class="Provider-input" placeholder="Enter your Company Name" minLength={4} required/>
       </div>

      <div class="Provider-flex-column">
      <label>Role </label></div>
      <div class="Provider-inputForm">
        <input type="text" class="Provider-input" placeholder="Ex. Full Stack Developer" minLength={4} required/>
        </div>

      <div class="Provider-flex-column">
      <label>Experience </label></div>
      <div class="Provider-inputForm">
        <select name="client-experience" class="Provider-input" >
            <option value="">Select Experience</option>
            <option value="0-1-year">0-1 year</option>
            <option value="1-3-years">1-3 years</option>
            <option value="3-5-years">3-5 years</option>
            <option value="5-10-years">5-10 years</option>
            <option value="more-than-10-years">More than 10 years</option>
        </select>
        </div>

      <div class="Provider-flex-column">
      <label>LinkedIn URL </label></div>
      <div class="Provider-inputForm">
        <input type="text" class="Provider-input" placeholder="Enter your LinkedIn URL" minLength={4} required/>
        </div>

      <div class="Provider-flex-column">
      <label>GitHub URL</label></div>
      <div class="Provider-inputForm">
        <input type="text" class="Provider-input" placeholder="Enter your GitHub URL" minLength={4} required/>
      </div>

      <div class="Provider-flex-column">
      <label>Upload your Image </label></div>
      <div class="Provider-inputForm">     
        <input type="file" class="Provider-input file" filetype="image/*" required/>
      </div>


        <Link to="/">
        <button class="Provider-button-submit">Register</button>
        </Link>
    </form>
    </div>

)}
    export default ReferralProvider;
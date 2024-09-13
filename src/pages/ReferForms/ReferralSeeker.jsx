import React from 'react';
import { Link } from 'react-router-dom';
import './ReferralSeeker.css';
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
function ReferralSeeker()
{
    return (
    <div class="ReferralSeeker-container">
    <form class="ReferralSeeker-form">
    <Link to="/">
    <div className='Back-button'><IoMdArrowRoundBack size={30}/></div>
    </Link>
    <div className='Seeker-profile'><FaUserCircle size={100}/></div>

    <div class="Seeker-flex-column">
      <label>Name </label></div>
      <div class="Seeker-inputForm">
         <input type="text" class="Seeker-input" placeholder="Firstname Lastname" minLength={4} required/>
      </div>

    <div class="Seeker-flex-column">
      <label>Email </label></div>
      <div class="Seeker-inputForm">
        <input type="email" class="Seeker-input" placeholder="Enter your Email" minLength={4} required/>
      </div>
    
    <div class="Seeker-flex-column">
      <label>Degree </label></div>
      <div class="Seeker-inputForm">
         <input type="text" class="Seeker-input" placeholder="Enter your Degree" minLength={4} required/>
       </div>

      <div class="Seeker-flex-column">
      <label>Role </label></div>
      <div class="Seeker-inputForm">
        <input type="text" class="Seeker-input" placeholder="Ex. Full Stack Developer" minLength={4} required/>
        </div>

      <div class="Seeker-flex-column">
      <label>LinkedIn URL </label></div>
      <div class="Seeker-inputForm">
        <input type="text" class="Seeker-input" placeholder="Enter your LinkedIn URL" minLength={4} required/>
        </div>

      <div class="Seeker-flex-column">
      <label>GitHub URL</label></div>
      <div class="Seeker-inputForm">
        <input type="text" class="Seeker-input" placeholder="Enter your GitHub URL" minLength={4} required/>
      </div>

      <div class="Seeker-flex-column">
      <label>Upload your Image </label></div>
      <div class="Seeker-inputForm">     
        <input type="file" class="Seeker-input file"  required/>
      </div>


        <Link to="/">
        <button class="Seeker-button-submit">Register</button>
        </Link>
    </form>
    </div>

)}
    export default ReferralSeeker;
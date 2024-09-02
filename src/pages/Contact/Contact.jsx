import React from 'react';
import './Contact.css';
import { FaGithub } from "react-icons/fa";
import CompLoad from '../Extra/CompLoad';
import Login from '../Login/Login';
import Register from '../Login/Register';

const ContactUs = () => {

  const handleOnClick = () => {
    window.open('https://github.com/Hemantpandit12/NextHire');
  }
  return (
    <><CompLoad /><div><Login /><Register /></div><div className="contact">
      <FaGithub className='Android' size={150} onClick={handleOnClick} />
      <h1>Contact Us</h1>
      <p>Click on the icon to get the Source Code.</p>
    </div></>
  );
};

export default ContactUs;

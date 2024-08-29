import React from 'react';
import './About.css';
import { FaHireAHelper } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <FaHireAHelper className='Amazon' size={130} />
      <h1>Welcome to NextHire</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;

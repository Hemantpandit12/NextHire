import React from "react";
import Footer from "./Footer";
import "./Explore.css";
import Profiles from './Profiles';
import CompLoad from '../Extra/CompLoad';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Explore = () => {
  return (
    <>
    <div><CompLoad /></div>
    <div className="Explore-grid">
      {Profiles.map((Explore, index) => (
        <div key={index} className="Explore-card">
          <img src={Explore.image} alt={Explore.name} className="Explore-image" />
          <div className="Explore-icons">
            <a href={Explore.linkedin} target={Explore.linkedin} rel="noopener noreferrer">
              <FaLinkedin className="Explore-icon" />
            </a>
            <a href={Explore.github} target={Explore.github} rel="noopener noreferrer">
              <FaGithub className="Explore-icon" />
            </a>
          </div>
          <div className="Explore-info">
            <h3 className="Explore-name">{Explore.name}</h3>
            <p className="Explore-price">{Explore.degree}</p>
            <p className="Explore-price">{Explore.role}</p>
            <p className="Explore-price">{Explore.email}</p>
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </>
  );
};

export default Explore;
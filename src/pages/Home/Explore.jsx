import React from "react";
import "./Explore.css";
import Profiles from './Profiles';
import CompLoad from '../Extra/CompLoad';
const Explore = () => {
  return (
    <>
    <div><CompLoad /></div>
    <div className="Explore-grid">
      {Profiles.map((Explore, index) => (
        <div key={index} className="Explore-card">
          <img src={Explore.image} alt={Explore.name} className="Explore-image" />
          <div className="Explore-info">
            <h3 className="Explore-name">{Explore.name}</h3>
            <p className="Explore-price">{Explore.degree}</p>
            <p className="Explore-price">{Explore.role}</p>
            <p className="Explore-price">{Explore.email}</p>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default Explore;
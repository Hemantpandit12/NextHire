import React from "react";
import "./Card.css"; // Import the CSS file
import student from "./student.svg";

const Card = () => {
  return (
    <div className="glass-card">
      <div className="card-columns">
        {/* Column 1 */}
        <div className="card-column c1">
          <div className="CardImg">
            <img src={student} alt="Placeholder" className="Cimg" />
          </div>
          <h3 className="Card-heading">Get Referral</h3>
          <p className="card-text">
            If you are here to get referral then click on this card start creating a profile with the related skillset.
          </p>
        </div>

        {/* Column 2 */}
        <div className="card-column c2">
        <div className="CardImg">
            <img src={student} alt="Placeholder" className="Cimg" />
          </div>
          <h3 className="Card-heading">Give Referral</h3>
          <p className="card-text">
            If you are here to give referral then click on this card and create your profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

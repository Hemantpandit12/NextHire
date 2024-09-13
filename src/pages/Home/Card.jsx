import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css";
import student from "./student.svg";

const Card = () => {
  return (
    
    <div className="ParentDiv">
      <div className="glass-card">
        <div className="card-columns">
          {/* Column 1 */}
          <Link to="/Seeker" >
          <div className="card-column c1">
            <div className="CardImg">
              <img src={student} alt="Placeholder" className="Cimg" />
            </div>
            <h3 className="Card-heading">Referral Seeker</h3>
            <p className="card-text">
              If you are here to seek referral then click on this card start creating a profile with the related skillset.
            </p>
          </div>
          </Link>

          {/* Column 2 */}
          <Link to="/Provider" >
          <div className="card-column c2">
          <div className="CardImg">
              <img src="https://plus.unsplash.com/premium_vector-1683141132250-12daa3bd85cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29uJTIwaW4lMjBzdWl0fGVufDB8fDB8fHww" alt="Placeholder" className="Cimg" />
            </div>
            <h3 className="Card-heading">Referral Provider</h3>
            <p className="card-text">
              If you are here to provide referral then click on this card and create your profile.
            </p>
          </div>
          </Link>

          {/* Column 3 */}
          <Link to="/Explore" >
          <div className="card-column c2">
          <div className="CardImg">
              <img src="https://plus.unsplash.com/premium_vector-1723417838535-17406e42899d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhcmNofGVufDB8fDB8fHww" alt="Placeholder" className="Cimg" />
            </div>
            <h3 className="Card-heading">Explore</h3>
            <p className="card-text">
              Click here and explore others profile
            </p>
          </div>
          </Link>
        </div>
      </div>
      </div>
    );
};

export default Card;

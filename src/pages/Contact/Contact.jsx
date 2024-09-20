import React from 'react';
import './Contact.css';
import Footer from '../Home/Footer';
import { FaGithubSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const ContactUs = () => {
  return (
    <>
      
      <div className="Parent-contact">
        
        <div className="contact-head">
          <div className="h1-container">
            <h1>Contact NextHire</h1>
          </div>
        </div>

        <div className="contact-info">

          <div className="contact-info-1">
            <h2>Email :   info@nexthire.com</h2>
            <h2>Phone :  (123) 456-7890</h2>
            <h2>Address : 123 Tata Strive, Anand</h2>
            <div className="contact-icon">
              <FaGithubSquare className='icon' size={50} /> <FaFacebookSquare className='icon' size={50} /> <FaInstagramSquare className='icon' size={50} /> <FaSquareXTwitter className='icon' size={50} />
            </div>
          </div>

          <div className="contact-info-2">

          <form className="contact-form">

            <div class="flex-column">
              <label>Name </label></div>
              <div class="inputForm">
                <input type="text" class="input" placeholder="Enter your Full Name" minLength={4} required/>
               </div>

            <div class="flex-column">
              <label>Email </label></div>
              <div class="inputForm">
                <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
                <input type="email" class="input" placeholder="Enter your Email" minLength={4} required/>
              </div>

              <div class="flex-column">
              <label>Description </label></div>
              <div class="inputForm textarea">
               <input type="textarea" class="input textarea" placeholder="Enter Description"  required/>
              </div>
      
              <button type="submit" className="button-submit">Submit</button>

          </form> 
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactUs;

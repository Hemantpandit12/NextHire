import React, { useState } from 'react';
import './Login.css';
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
function Login()
{   
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [submitting, setSubmitting] = useState(false);

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setErrors({});
  };
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try 
    {
      await validationSchema.validate(formData, { abortEarly: false });
      // Form data is valid, handle submission here (e.g., send to server)
      const response = await axios('http://localhost:3000/api/register', formData);
      if (response.status === 201) 
      {
          const formDataString = `
          Email: ${formData.email}
          Password: ${formData.password} `;
        alert('Form submitted successfully:\n\n' + formDataString);
        navigate('/home');
        resetForm();
      }
      else
      {
        const errorText = await response.text();
        setErrors(errorText);
        alert('Login failed');
      }
    } 
    catch (err) 
    {
      if (err.inner) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        // Handle other types of errors
        console.error(err);
        setErrors({ general: err.message });
      }
    } 
    finally 
    {
      setSubmitting(false);
    }
  };
    return (
    <div class="logincontainer">
    <form class="loginform" onSubmit={handleSubmit}>
    <div className='profile'><FaUserCircle size={100}/></div>
    <div className="flex-column">
          <label>Email </label>
          <div className="inputForm">
          <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>
            <input
              type="email"
              class="input"
              placeholder="Enter your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">*{errors.email}</p>}
          </div>  
    </div>  
    <div class="flex-column">
      <label>Password </label></div>
      <div class="inputForm">
        <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>        
        <input
          type="password"
          class="input"
          placeholder="Enter your Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="error-message">*{errors.password}</p>}   
      </div>
    <div class="flex-row">
      <div>
      <input type="checkbox" />
      <label className='l1'>Remember me </label>
      </div>
      <span class="span">Forgot password?</span>
    </div>
    <button class="button-submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Sign In'}</button>
    <p class="p">Don't have an account? 
            <Link to="/Signup" className="span">
            Sign Up
            </Link>
    </p>
    </form>
    </div>    
     )}
export default Login;
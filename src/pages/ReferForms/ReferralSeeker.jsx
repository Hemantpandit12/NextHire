import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ReferralSeeker.css';
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as Yup from 'yup';
import axios from 'axios';
function ReferralSeeker()
{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    degree: '',
    role: '',
    linkedin: '',
    github: '',
    fileupload: '',
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    degree: Yup.string().required('Degree is required'),
    role: Yup.string().required('Role is required'),
    linkedin: Yup.string().required('Full Name is required'),
    github: Yup.string().required('URL is required'),
    fileupload: Yup.string().required('Image is required'),
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [submitting, setSubmitting] = useState(false);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      degree: '',
      role: '',
      linkedin: '',
      github: '',
      fileupload: '',
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
          Name: ${formData.name}
          Email: ${formData.email}
          degree: ${formData.degree}
          role: ${formData.role} 
          linkedin: ${formData.linkedin}
          github: ${formData.github}  `;
        alert('Form submitted successfully:\n\n' + formDataString);
        navigate('/Explore');
        resetForm();
      }
      else
      {
        const errorText = await response.text();
        setErrors(errorText);
        alert('Registration failed');
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
    <div class="ReferralSeeker-container">
    <form class="ReferralSeeker-form" onSubmit={handleSubmit}>
    <Link to="/home">
    <div className='Back-button'><IoMdArrowRoundBack size={30}/></div>
    </Link>
    <div className='Seeker-profile'><FaUserCircle size={100}/></div>

    <div class="Seeker-flex-column">
      <label>Name </label></div>
      <div class="Seeker-inputForm">
         <input type="text" class="Seeker-input" placeholder="Firstname Lastname" 
              name="name"
              value={formData.name}
              onChange={handleChange}/>
            {errors.name && <p className="error-message">*{errors.name}</p>}
      </div>

    <div class="Seeker-flex-column">
      <label>Email </label></div>
      <div class="Seeker-inputForm">
        <input type="email" class="Seeker-input" placeholder="Enter your Email" 
              name="email"
              value={formData.email}
              onChange={handleChange}/>
            {errors.email && <p className="error-message">*{errors.email}</p>}
      </div>
    
    <div class="Seeker-flex-column">
      <label>Degree </label></div>
      <div class="Seeker-inputForm">
         <input type="text" class="Seeker-input" placeholder="Enter your Degree" 
              name="degree"
              value={formData.degree}
              onChange={handleChange}/>
            {errors.degree && <p className="error-message">*{errors.degree}</p>}
       </div>

      <div class="Seeker-flex-column">
      <label>Role </label></div>
      <div class="Seeker-inputForm">
        <input type="text" class="Seeker-input" placeholder="Ex. Full Stack Developer" 
              name="role"
              value={formData.role}
              onChange={handleChange}/>
            {errors.role && <p className="error-message">*{errors.role}</p>}
        </div>

      <div class="Seeker-flex-column">
      <label>LinkedIn URL </label></div>
      <div class="Seeker-inputForm">
        <input type="text" class="Seeker-input" placeholder="Enter your LinkedIn URL" 
              name="linkedin" 
              value={formData.linkedin}
              onChange={handleChange}/>
            {errors.linkedin && <p className="error-message">*{errors.linkedin}</p>}
        </div>

      <div class="Seeker-flex-column">
      <label>GitHub URL</label></div>
      <div class="Seeker-inputForm">
        <input type="text" class="Seeker-input" placeholder="Enter your GitHub URL" 
              name="github"
              value={formData.github}
              onChange={handleChange}/>
            {errors.github && <p className="error-message">*{errors.github}</p>}
      </div>

      <div class="Seeker-flex-column">
      <label>Upload your Image </label></div>
      <div class="Seeker-inputForm">     
        <input type="file" class="Seeker-input file"  
              name="fileupload"
              value={formData.fileupload}
              onChange={handleChange}/>
            {errors.fileupload && <p className="error-message">*{errors.fileupload}</p>}
      </div>

        <button class="Seeker-button-submit" disabled={submitting}>{submitting ? 'Registering...' : 'Register'}</button>
    </form>
    </div>

)}
    export default ReferralSeeker;
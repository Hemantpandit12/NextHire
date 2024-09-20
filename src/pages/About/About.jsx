import React from 'react';
import './About.css';
import Footer from '../Home/Footer';

const About = () => {
  return (
  <>
    <div className="about-parent-container">
    <div className="about-container">
        <div className="about-head">
          <div className="about-h1-container">
            <h1>About NextHire</h1>
          </div>
        </div>
    </div>
    <div className='about-info'>
      <h2 className='secondHeading'>What is NextHire</h2>
      <p className='para about-info-start'>
        Welcome to NextHire! Our platform bridges the gap between job seekers 
        and employers through a unique referral system. We believe that connections 
        matter, and the right referral can make all the difference in landing your dream job.
      </p>
      <div className="about-info-parent">
        <div className="about-info-1">
          <h2 className='secondHeading'>Our Vision</h2>
          <p className='para'>
            We envision a world where everyone has access to the resources they need to find 
            meaningful employment. NextHire aims to create a global network that empowers individuals 
            to connect, share opportunities, and thrive in their careers.
          </p>
        </div>
        <div className="about-info-2">
          <h2 className='secondHeading'>Our Mission</h2>
          <p className='para'>
            Our mission is to simplify the job search process by leveraging the power of referrals. 
            We connect job seekers with professionals across various industries, fostering a community 
            where everyone can support each other in their career journeys.
          </p>
        </div>
    </div>
      <h2 className='secondHeading key-features'>Key Features</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <h3>{feature.title}</h3>
            <p className='para'>{feature.description}</p>
          </div>
        ))}
      </div>

      <h2 className='secondHeading wous'>What Our Users Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className='para'>"{testimonial.quote}"</p>
            <h4 className='Heading4'>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
      <div className="about-foot">
        <div className="about-foot-1">
          <h2 className='secondHeading'>Join Us Today!</h2>
          <p className='para'>
            Ready to take the next step in your career? Join NextHire and become part of a thriving community 
            that values connections and opportunities. Sign up today and start your journey towards your dream job!
          </p>
        </div>
        <div className="about-foot-2">
          <h2 className='secondHeading'>Get In Touch</h2>
          <p className='para'>
            If you have any questions or feedback, feel free to reach out to us at 
            <a href="mailto:support@nextHire.com"> support@nextHire.com</a>. We’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
    </div>
    <Footer />
  </>
  );
};

const features = [
  {
    title: 'Global Networking',
    description: 'Connect with professionals and organizations from around the world.',
    image: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=Network'
  },
  {
    title: 'Referral System',
    description: 'Easily refer candidates for open positions and get rewarded.',
    image: 'https://via.placeholder.com/150/2196F3/FFFFFF?text=Referral'
  },
  {
    title: 'Job Matching',
    description: 'Tailored job recommendations based on your skills and preferences.',
    image: 'https://via.placeholder.com/150/FF9800/FFFFFF?text=Matching'
  },
  {
    title: 'Community Support',
    description: 'Engage with a community of like-minded individuals who share insights and opportunities.',
    image: 'https://via.placeholder.com/150/9C27B0/FFFFFF?text=Support'
  }
];

const testimonials = [
  {
    quote: 'NextHire helped me land my dream job! The referral system is a game changer.',
    name: 'Alice Johnson',
    image: 'https://via.placeholder.com/100/9E9E9E/FFFFFF?text=A'
  },
  {
    quote: 'I connected with amazing professionals through this platform. Highly recommend!',
    name: 'Mark Smith',
    image: 'https://via.placeholder.com/100/9E9E9E/FFFFFF?text=M'
  },
  {
    quote: 'The resources provided are incredibly helpful. I feel more prepared than ever.',
    name: 'Jessica Lee',
    image: 'https://via.placeholder.com/100/9E9E9E/FFFFFF?text=J'
  }
];

export default About;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Home/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactUs from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
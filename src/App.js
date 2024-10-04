import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Home/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactUs from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import ReferralSeeker from './pages/ReferForms/ReferralSeeker';
import ReferralProvider from './pages/ReferForms/ReferralProvider';
import Explore from './pages/Home/Explore';
import AdminHome from './pages/Admin/AdminHome';
import LoginProfiles from './pages/Admin/LoginProfiles';
import SeekerProfiles from './pages/Admin/SeekerProfiles';
import ProviderProfiles from './pages/Admin/ProviderProfiles';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* User Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Register />} />
        <Route path="/Seeker" element={<ReferralSeeker />} />
        <Route path="/Provider" element={<ReferralProvider />} />
        <Route path="/Explore" element={<Explore />} />
        {/* Admin Routes */}
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/LoginProfiles" element={<LoginProfiles />} />
        <Route path="/SeekerProfiles" element={<SeekerProfiles />} />
        <Route path="/ProviderProfiles" element={<ProviderProfiles />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
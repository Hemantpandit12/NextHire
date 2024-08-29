import React from 'react';
import './Home.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import CompLoad from '../Extra/CompLoad';

const Home = () => {
  return (
    <div>
    <CompLoad />
    <Header />
    <Main />
    <Footer />
    </div>
  );
};
export default Home;

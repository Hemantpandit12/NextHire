import React from 'react';
import './Home.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import CompLoad from '../Extra/CompLoad';
import Card from './Card'
import ImageCarousel from './ImageCarousel';

const Home = () => {
  return (
    <>
    <CompLoad />
    <Main />
    <Header />
    <Card />
    <ImageCarousel />
    <Footer />
    </>
  );
};
export default Home;

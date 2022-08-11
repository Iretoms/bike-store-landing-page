import React from 'react';
import BikeTypes from '../components/BikeTypes';
import Customer from '../components/Customer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HybridBikes from '../components/HybridBikes';

const Home = () => {
    return (
        <>
         <Header/>
         <Hero/>
         <BikeTypes/>
         <HybridBikes/>
         <Customer/>
         <Footer/> 
        </>
    );
};

export default Home;
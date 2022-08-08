import React from 'react';
import BikeTypes from '../components/BikeTypes';
import Customer from '../components/Customer';
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
        </>
    );
};

export default Home;
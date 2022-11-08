import React from 'react';
import Services from '../../Services/Services';
import Banner from './Banner/Banner';
import Features from './Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
        </div>
    );
};

export default Home;